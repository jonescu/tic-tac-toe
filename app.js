//Variables
const gameContainer = document.querySelector('.game-container')
const gameSquare = Array.from(document.querySelectorAll('.game-square'))
const vsPlayerBtn = document.querySelector('.player-btn')
const vsComputerBtn = document.querySelector('.computer-btn')
const restartBtn = document.querySelector('.restart-btn')
const playerName = document.querySelector('#username')
const playerMarks = Array.from(document.getElementsByName('mark'))
const features = document.querySelector('.features')
const startBtn = document.querySelector('.start-btn')
const chooseOpponent = document.querySelector('.choose-opponent-message')
let playerMark = '';


//Gameboard Module
const gameBoard = (() => {
  const board = ['','','','','','','','','']

  //Render array elements onto board
  function render() {
      for(let i = 0; i<board.length; i++) {
          gameSquare[i].textContent = board[i]
      }
  }

  function toggle(){
      if(playerMark == 'o') {
          playerMark = 'x'
      } else {
          playerMark = 'o'
      }
  }

  //Place mark on board, toggle turn
  function placeMark(mark) {
      restartBtn.style.visibility = 'visible'
      gameContainer.addEventListener('click', function(e){
          let index = e.target.id
          if(e.target.textContent != '') {
            e.target.textContent = e.target.textContent
          } else {
              board.splice(index, 1, playerMark)
              render();
              checkWinner();
              toggle();
          } 
    })
}

    //Restart
    function restart(){
        gameSquare.forEach(el => el.textContent = '')
        for(let i = 0; i<board.length; i++) {
            board[i] = ''
        }
        chooseOpponent.textContent = ''
        playerName.value = ''
        vsComputerBtn.disabled = false
        vsPlayerBtn.disabled = false
        playerMarks[0].checked = false
        playerMarks[1].checked = false
    }
    restartBtn.addEventListener('click', restart)

   // Check winner
   function checkWinner(){
    for(let i = 0; i<board.length; i++) {
        if(board[i] == board [i+3] && board[i] == board[i+6] && board[i] != '') {
            if(board[i] != playerMark) {
                displayWinner("Player 2")
            } else {
                    displayWinner(playerName.value)
                }
            }
            if(board[0] == board[1] && board[0] == board[2] && board[0] !== '') {
                if(board[1] != playerMark) {
                    displayWinner("Player 2")
                } else {
                    displayWinner(playerName.value)
                }
            }
            if(board[3] == board[4] && board[3] == board[5] && board[3] !== ''){
                if(board[4] != playerMark) {
                    displayWinner("Player 2")
                } else {
                    displayWinner(playerName.value)
                }
            }
            if(board[6] == board[7] && board[6] == board[8] && board[6] !== ''){
                if(board[7] != playerMark) {
                    displayWinner("Player 2")
                } else {
                    displayWinner(playerName.value)
                }
            }
            if(board[2] == board[4] && board[2] == board[6] && board[2] !== ''){
                if(board[4] != playerMark) {
                    displayWinner("Player 2")
                } else {
                    displayWinner(playerName.value)
                }
            }
            if(board[0] == board[4] && board[0] == board[8] && board[0] !== ''){
                if(board[4] != playerMark) {
                    displayWinner("Player 2")
                } else {
                    displayWinner(playerName.value)
                }
            }
        }
   }

    // Display Winner
    function displayWinner(name) {
        chooseOpponent.style.visibility = 'visible'
        if(name === playerName.value) {
            chooseOpponent.textContent = `${playerName.value} wins, congratulations.`
        } else {
            chooseOpponent.textContent = `${name} wins, congratulations.`
        }
    }

    //Player Factory Function
const createPlayer = (name, mark) => {
    return { name, mark }
 }
 
 //Choose name and mark
 function chooseMark() {
     if(playerName.value === '') {
         alert('Please fill in a username and choose a mark.')
     } else {
         features.style.visibility = 'hidden'
         restartBtn.style.visibility = 'visible'
         vsComputerBtn.disabled = true;
         vsPlayerBtn.disabled = true;
         for(let i=0; i<playerMarks.length; i++) {
             if(playerMarks[i].checked) {
                 playerMark = playerMarks[i].id
                     createPlayer(playerName.value, playerMark)
                     console.log(playerMark)
                     gameBoard.placeMark(playerMark)
                 } 
             }
         }
     }
 vsPlayerBtn.addEventListener('click', function(){
     features.style.visibility = 'visible'
     chooseOpponent.style.visibility = 'hidden'
 })
 
 //Begin game
 startBtn.addEventListener('click', chooseMark)
    //Return public methods
    return {
        render,
        placeMark,
        checkWinner,
        placeMark,
        restart
    }
})();





