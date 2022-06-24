let playerMark = null
let aiMark = null
let currentTurn = null
let pieces = 1
const header = document.querySelector('.header')
const gameBoard = document.querySelector('.game-container')
const markSelector = document.querySelector('#mark-selector')
const beginBtn = document.querySelector('#begin-button')
const resetBtn = document.querySelector('#reset-button')
const board = [['','',''],
              ['','',''],
              ['','','']]


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
  beginBtn.style.display = 'none'
  resetBtn.style.display = 'block'
}
beginBtn.addEventListener('click', getPlayerMark)

// Place mark
function placeMark(e){
  console.log(pieces)
  if(playerMark !== null && e.target.classList.contains('game-square')){
    if(e.target.textContent === '') {
      pieces++
      e.target.textContent = currentTurn 
      const index = parseInt(e.target.dataset.key)
      const innerIndex = parseInt(e.target.id)
      board[index].splice(innerIndex, 1, currentTurn)
      if(currentTurn === playerMark) {
        currentTurn = aiMark
      } else {
        currentTurn = playerMark
      }
    }
    if(pieces >= 5) {
      checkBoard()
  }
    e.preventDefault()
  }
  
}
gameBoard.addEventListener('click', placeMark)

// Terrible check for win condition
function checkBoard(){
  if(board[0][0] !== '' && board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
    displayWinner(board[0][0])
    console.log('row 1 working', board)
  } else if(board[1][0] !== '' && board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
    displayWinner(board[1][0])
    console.log('row 2 working', board)

  } else if(board[2][0] !== '' && board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
    displayWinner(board[2][0])
    console.log('row 3 working', board)

  } else if(board[0][0] !== '' && board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
    displayWinner(board[0][0])
    console.log('column 1 working', board)

  } else if(board[0][1] !== '' && board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
    displayWinner(board[0][1])
    console.log('column 2 working')

  } else if(board[0][2] !== '' && board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
    displayWinner(board[0][2])
    console.log('column 3 working')

  } else if(board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    displayWinner(board[0][0])
    console.log('diagonal 1 working')

  } else if(board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    displayWinner(board[0][2])
    console.log('diagonal 2 working')

  } else if(pieces === 10) {
    header.textContent = "It's a tie"
  }
  }

function displayWinner(winningMark) {
  header.textContent = `${winningMark} wins, congratulations!`
  pieces = 1
  playerMark = null
  currentTurn = null
}

function reset(){
  // Clear game board UI
  const squares = document.querySelectorAll('.game-square')
  squares.forEach(square => {
    square.textContent = ''
  })

  resetBtn.style.display = 'none'
  beginBtn.style.display = 'block'
  header.textContent = 'Tic-Tac-Toe'
  pieces = 1
  playerMark = null
  currentTurn = null
  // Reset gameboard array
  for(let i = 0; i<board.length; i++) {
    for(let j = 0; j<board.length; j++) {
      board[i][j] = ''
    }
  }

  console.log(playerMark, currentTurn, board)
}

resetBtn.addEventListener('click', reset)