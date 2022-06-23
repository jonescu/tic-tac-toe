const gameBoard = document.querySelector('.game-container')
const markSelector = document.querySelector('#mark-selector')
const beginBtn = document.querySelector('#begin-button')
const board = [['','',''],
              ['','',''],
              ['','','']]
let playerMark = null
let aiMark = null
let currentTurn = null
let pieces = 0


// Assign mark to players
function getPlayerMark(){
  let choices = ['X', 'O']
  playerMark = markSelector.value
  choices.forEach(choice => {
    if(playerMark === choice) {
      choices.splice(choices.indexOf(choice), 1)
      aiMark = choices[0]
    }
    currentTurn = playerMark
  })
  beginBtn.disabled = true
}
beginBtn.addEventListener('click', getPlayerMark)

// Place mark
function placeMark(e){
  if(e.target.textContent === '') {
    e.target.textContent = currentTurn 
    pieces++
    const index = parseInt(e.target.dataset.key)
    const innerIndex = parseInt(e.target.id)
    board[index].splice(innerIndex, 1, currentTurn)
    if(currentTurn === playerMark) {
      currentTurn = aiMark
    } else {
      currentTurn = playerMark
    }
  }
  if(pieces > 4) {
    checkBoard()
}
  e.preventDefault()
}
gameBoard.addEventListener('click', placeMark)

// Loop through board and check for win
function checkBoard(){
  
  }



// const winningConditions = [
//                           [1, 2, 3]
//                           [4, 5, 6]
//                           [7, 8, 9]
//                           [1, 4, 7]
//                           [2, 5, 8]
//                           [3, 6, 9]
//                           [1, 5, 9]
//                           [3, 5, 7]
//                         ]



