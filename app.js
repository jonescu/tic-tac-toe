//Variables
const gameContainer = document.querySelector('.game-container')
const gameSquare = Array.from(document.querySelectorAll('.game-square'))
const vsPlayerBtn = document.querySelector('.player-btn')
const vsComputerBtn = document.querySelector('.computer-btn')
const restartBtn = document.querySelector('.restart-btn')
const playerName = document.querySelector('#username')
const playerMark = Array.from(document.getElementsByName('mark'))

//Gameboard Module
const gameBoard = (() => {
  const board = ['','','','','','','','','']

  //Render array elements onto board
  function render() {
      for(let i = 0; i<board.length; i++) {
          gameSquare[i].textContent = board[i]
      }
  }

  //Place mark on board
  function placeMark(mark) {
      gameContainer.addEventListener('click', function(e){
        let index = e.target.id
        board.splice(index, 1, mark)
        render();
      })
  }
  //Return public methods
  return {
      render,
      placeMark
  }
})();

//Player Factory Function
const createPlayer = (name, mark) => {
   return { name, mark }
}

//Choose name and mark
function chooseMark() {
    restartBtn.style.display = 'block'
    for(let i=0; i<playerMark.length; i++) {
        if(playerMark[i].checked) {
                let playerOne = createPlayer(playerName.value, playerMark[i].id)
                gameBoard.placeMark(playerMark[i].id)
            }
        }
  }
  vsPlayerBtn.addEventListener('click', chooseMark)

//Restart
function restart(){
    gameSquare.forEach(el => el.textContent = '')
    playerName.value = ''
    restartBtn.style.display = 'none'
    if(playerMark[0].checked === true || playerMark[1].checked === true) {
        playerMark[0].checked = false
        playerMark[1].checked = false
        console.log('works')
    }
}
restartBtn.addEventListener('click', restart)

//Function Calls
gameBoard.render();
gameBoard.placeMark();
