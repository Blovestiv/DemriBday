const countdownElement = document.getElementById('countdown-timer');
const countdownBar = document.getElementById('countdown-bar');
let timeRemaining = 5; // 5 seconds countdown

function updateCountdown() {
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Redirecting...";
        window.location.href = '2pg.html';
    } else {
        countdownElement.textContent = `Redirecting in ${timeRemaining} seconds...`;
        const progress = (5 - timeRemaining) / 5 * 100; // Calculate progress as a percentage
        countdownBar.style.width = `${progress}%`;
        timeRemaining--;
    }
}

// Start the countdown timer
const countdownInterval = setInterval(updateCountdown, 1000);