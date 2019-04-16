const displayController = (() => {

	const Board = () => {

		const setBoard = (boardArray) => {
			for (index in boardArray) {
				document.getElementById('a' + String(index)).innerHTML = boardArray[index];
			}
		}

		const isWinningMove = (xOrO, boardArray) => {
			console.log(checkSpaces(xOrO, boardArray, 2, 4, 6));
			return (checkSpaces(xOrO, boardArray, 0, 1, 2) || checkSpaces(xOrO, boardArray, 3, 4, 5) || checkSpaces(xOrO, boardArray, 6, 7, 8) ||
				checkSpaces(xOrO, boardArray, 0, 3, 6) || checkSpaces(xOrO, boardArray, 1, 4, 7) || checkSpaces(xOrO, boardArray, 2, 5, 8) ||
				checkSpaces(xOrO, boardArray, 0, 4, 8) || checkSpaces(xOrO, boardArray, 2, 4, 6));
		}

		const checkSpaces = (xOrO, boardArray, index1, index2, index3) => {
			if (index1 === 2 && index2 === 4 && index3 === 6) {
				console.log(boardArray);
			}

			if (boardArray[index1] === xOrO && boardArray[index2] === xOrO && boardArray[index3] === xOrO) {
				return true;
			}
			return false;
		}

		const makeMoves = (boardArray, player1Name, player2Name) => {

			var counter = 0;
			var xOrO;

			document.body.addEventListener('click', function (event) {
				// If the clicked element doesn't have the right selector, bail
				if (event.target.matches('.space')) {
					
					if (counter %= 2) {
						xOrO = "X";
					}
					else {
						xOrO = "O";
					}

					boardArray[event.target.id[1]] = xOrO;
					event.target.innerHTML = xOrO;
					event.target.style.pointerEvents = "none";
					counter = counter + 1;
					
					if (isWinningMove(xOrO, boardArray)) {
						if (xOrO == "O") {
							document.getElementById("messageboard").innerHTML = player1Name + " won";
						}
						else {
							document.getElementById("messageboard").innerHTML = player2Name + " won";
						}
					}
				}
			}, false);
		
		}

		return { setBoard, checkSpaces, isWinningMove, makeMoves };

	}

	const PlayerFactory = (playerName) => {

		return { playerName }

	}

	const startGame = () => {

		var board = Board();
		startBoardArray = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
		board.setBoard(startBoardArray);
		board.makeMoves(startBoardArray, "P1", "P2");

	}

	const continueGame = () => {

	}

	return {Board, PlayerFactory, startGame};

})();

displayController.startGame();