let btnRef = document.querySelectorAll(".button-option");
let popup = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

// Winning Pattern Array
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], 
];

// Player X's plays first
let xTurn = true;
let count = 0;

// Win Logic
const winChecker = () => {
    // loop through all win patterns
    for(let i of winningPattern)
    {
        let[element1, element2, element3] = [btnRef[i[0]].innerText, 
        btnRef[i[1]].innerText,
        btnRef[i[2]].innerText,
    ];
    }
}


// Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if(xTurn){
            xTurn = false;

            // Display
            element.innerText = "X";
            element.disabled = true;
        } else{
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }

        // Increment count on each click
        count += 1;
        if(count === 9)
        {
            // It's a draw since  there are a total no. of 9 boxes
        }

        // Check Win on every click
        winChecker();
    });
});

