const displayController = (() => {	
	const board = (boardArray) => {
		const renderBoard = () => {
			for (index in boardArray) {
				console.log('a' + String(index));
				document.getElementById('a' + String(index)).innerHTML = boardArray[index];
			}
		}
		const checkBoard = () => {
			if (true) {
				console.log('someone won');
			}
			else {
				console.log('someone else won');
			}
		}
		return {renderBoard, checkBoard};
	}
	const playerFactory = (name) => {
		const makeMove = () => {
			console.log(name + ' is making a move');

		}
		return {makeMove};
	}
	return {board, playerFactory};
})();
var startingBoard = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
displayController.board(startingBoard).renderBoard();
displayController.playerFactory("PLAYER1").makeMove();