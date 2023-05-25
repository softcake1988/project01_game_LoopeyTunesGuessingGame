const playAgainBtn = document.querySelector('#play-again-btn');
    playAgainBtn.addEventListener('click', function() {
    location.href = "./index.html";
});

window.onload = () => {
    const points = localStorage.getItem("pointResult");
    const pointsDisplayed = document.querySelector('#player-points-result');
    pointsDisplayed.innerHTML = `YOUR SCORE: ${points} points`;
};

