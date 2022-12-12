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

// Disable all buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));

    // enable popup
    popup.classList.remove("hide");
    
}

// Enable all buttons (For New Game and Restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    // disable popup
    popup.classList.add("hide");
}


// New Game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
})

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
})

// This function is executed when a player wins
const winFunction = (letter) => {
    disableButtons();
    if(letter == "X")
    {
        msgRef.innerHTML = "'X' wins";
    }
    else
    {
        msgRef.innerHTML ="'O' wins";
    }
}

// Function for draw
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "It's a Draw";
}

// Win Logic
const winChecker = () => {
    // loop through all win patterns
    for(let i of winningPattern)
    {
        let[element1, element2, element3] = [btnRef[i[0]].innerText, 
        btnRef[i[1]].innerText,
        btnRef[i[2]].innerText,
    ];

    // Check if elements are filled
    // If 3 elements are same then give them a win

    if(element1 != "" && (element2 != "") & (element3 != ""))
    {
        if(element1 == element2 && element2 == element3)
        {
            // if all three buttons have same values then pass the value to win function
            winFunction(element1);
        }
    }
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
        if(count == 9)
        {
            // It's a draw since  there are a total no. of 9 boxes
            drawFunction();
        }

        // Check Win on every click
        winChecker();
    });
});

// Enable Buttons and disable popup on page load
window.onload = enableButtons;

