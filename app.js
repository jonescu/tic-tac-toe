//Variables
const gameContainer = document.querySelector('.game-container')
const gameSquare = Array.from(document.querySelectorAll('.game-square'))
const vsPlayerBtn = document.querySelector('.player-btn')
const vsComputerBtn = document.querySelector('.computer-btn')
const restartBtn = document.querySelector('.restart-btn')
const playerName = document.querySelector('#username')
const playerMark = Array.from(document.getElementsByName('mark'))
const features = document.querySelector('.features')
const startBtn = document.querySelector('.start-btn')
const chooseOpponent = document.querySelector('.choose-opponent-message')
let x_class = 'x'
let o_class = 'o'

//Gameboard Module
const gameBoard = (() => {
  const board = ['','','','','','','','','']

  //Render array elements onto board
  function render() {
      for(let i = 0; i<board.length; i++) {
          gameSquare[i].textContent = board[i]
      }
  }

  //Place mark on board, toggle turn
  function placeMark(mark) {
      gameContainer.addEventListener('click', function(e){
        let index = e.target.id
        board.splice(index, 1, mark)
        render();
        if(mark === x_class) {
            mark = o_class
        } else {
            mark = x_class
        }
      })
  }

  //Check winner
  function checkWinner(){
      console.log(board)
  }

  //Return public methods
  return {
      render,
      placeMark,
      checkWinner
  }
})();

//Player Factory Function
const createPlayer = (name, mark) => {
   return { name, mark }
}

//Choose name and mark
function chooseMark() {
    features.style.visibility = 'hidden'
    restartBtn.style.visibility = 'visible'
    vsComputerBtn.disabled = true;
    vsPlayerBtn.disabled = true;
    for(let i=0; i<playerMark.length; i++) {
        if(playerMark[i].checked == x_class) {
              createPlayer(playerName.value, x_class)
                gameBoard.placeMark(x_class)
            } else {
              createPlayer(playerName.value, o_class)
                 gameBoard.placeMark(o_class)
            }
        }
  }

vsPlayerBtn.addEventListener('click', function(){
    features.style.visibility = 'visible'
    chooseOpponent.style.visibility = 'hidden'
})

//Begin game
startBtn.addEventListener('click', chooseMark)

//Restart
function restart(){
    gameSquare.forEach(el => el.textContent = '')
    playerName.value = ''
    restartBtn.style.visibility = 'hidden'
    vsComputerBtn.disabled = false
    vsPlayerBtn.disabled = false
    if(playerMark[0].checked === true || playerMark[1].checked === true) {
        playerMark[0].checked = false
        playerMark[1].checked = false
    }
}
restartBtn.addEventListener('click', restart)

