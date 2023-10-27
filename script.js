let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function makeMove(index) {
    if (board[index] === "" && !gameOver) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById("message").textContent = `Player ${board[a]} wins!`;
            gameOver = true;
            return;
        }
    }

    if (!board.includes("") && !gameOver) {
        document.getElementById("message").textContent = "It's a draw!";
        gameOver = true;
    }
}

function resetBoard() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;

    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }

    document.getElementById("message").textContent = "Player X's turn";
}

resetBoard();