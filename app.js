const gameContainer = document.querySelector('.game-container')
const gameSquare = Array.from(document.querySelectorAll('.game-square'))

// Gameboard Object
const gameBoard = (() => {
  const board = ['x','o','x','o','x','o','x','o','x']
  //Render array elements onto board
  function render() {
      for(let i = 0; i<board.length; i++) {
          gameSquare[i].textContent = board[i]
      }
  }

  return {
      render
  }
})();

// Player Factory Function
const player = (name, mark) => {
    this.name = name
    this.mark = mark
}

function gameOver(winningPlayer){
    console.log("Congratulations!")
    console.log(winningPlayer.name + " is the winner!")
  }


  gameBoard.render();