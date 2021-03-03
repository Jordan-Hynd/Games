let activePlayer =  "X";
let selectedSquares = [];

function placeXorO (squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById("squareNumber");
        if (activePlayer === "X") {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        selectedSquares.push(squareNumber + activePlayer);

        checkWinConditions();
        
        if (activePlayer === "X") {
            activePlayer = "O";
        } else {
            activePlayer = "X"
        }

        Audio("./media/place.mp3");

        if (activePlayer === "O") {
            disableClick();
            setTimeout(function() { computertsTurn(); }, 1000 );
        }
        return true;
    }

    function computertsTurn() {
        let success = false;

        let pickASquare;
        while(!success){
            pickASquare = String(math.floor(math.random() * 9));

        if (placeXorO(pickASquare)) {
            placeXorO(pickASquare);
            success = true;
            };
        }
    }
}