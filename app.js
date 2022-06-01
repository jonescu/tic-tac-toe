const gameContainer = document.querySelector('.game-container')
const gameSquare = Array.from(document.querySelectorAll('.game-square'))
const vsPlayerBtn = document.querySelector('.player-btn')
const vsComputerBtn = document.querySelector('.computer-btn')
const restartBtn = document.querySelector('.restart-btn')
const playerName = document.querySelector('#username')
const playerMark = document.querySelector('input[type="radio"]:checked')

console.log(playerMark)
// Gameboard Module
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
  return {
      render,
      placeMark
  }
})();

// Player Factory Function
const playerFactory = (name, mark) => {
   return { name, mark }
}

vsPlayerBtn.addEventListener('click', function(){
    const playerOne = playerFactory(playerName.value, 'x')
    console.log(playerOne)
    if(playerMark) {
        console.log(playerMark.value)
    }
})


gameBoard.render();
gameBoard.placeMark();
