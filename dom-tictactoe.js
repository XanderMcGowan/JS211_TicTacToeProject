//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!

let currentMarker = "X";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const handleClick = (element) => {

  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id);
  }
};

const addMarker = (id) => {

  const row = parseInt(id.charAt(0));
  const column = parseInt(id.charAt(2));
  board[row][column] = currentMarker;


  document.getElementById(id).innerHTML = currentMarker;
  checkForWin();
};

const checkForWin = () => {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    setTimeout(() => {window.alert(`Player ${currentMarker} won!`)}, 100);
  } else {
    changeMarker();
  }
};

const horizontalWin = () => {
  if (
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") ||
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  ) {
    return true;
  } else if (
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") ||
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  ) {
    return true;
  }
  if (
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") ||
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  ) {
    return true;
  }
};

const verticalWin = () => {
  if (
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  ) {
    return true;
  } else if (
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  ) {
    return true;
  }
  if (
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  ) {
    return true;
  }
};

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
) {
  return true
} if((board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X") 
|| (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O")
) {
return true
}
};

const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O";
  } else {
    currentMarker = "X";
  }
};

const resetBoard = () => {
  const squares = document.getElementsByTagName("TD");

  for (i = 0; i < squares.length; i++) {
    // will log out the id of each square as it loops over them.
    console.log(squares[i].id);

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null;

    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }
};

// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"
