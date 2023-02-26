const startBtn = document.getElementById("start-btn");
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const userChoiceX = document.getElementById("x-letter");
const userChoiceO = document.getElementById("o-letter");
const target = document.querySelectorAll(".box");
const infoText = document.getElementById('text');


userChoiceO.addEventListener('click', () => {
    infoText.textContent = 'You chose O'
})
userChoiceX.addEventListener('click', () => {
    infoText.textContent = 'You chose X'
})

// start game
startBtn.addEventListener("click", () => {
    startPage.style.display = "none";
    gamePage.style.display = "flex";
});


