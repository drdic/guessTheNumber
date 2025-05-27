
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;

const guessInput = document.getElementById('guessInput');
const resultMessage = document.getElementById('resultMessage');
const attempts = document.getElementById('attempts');
const submitGuess = document.getElementById('submitGuess');
const resetGame = document.getElementById('resetGame');

submitGuess.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attemptCount++;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        resultMessage.textContent = 'Введите число от 1 до 100.';
    } else if (userGuess === randomNumber) {
        resultMessage.textContent = `Умничка! Вы угадали число за ${attemptCount} попыток!`;
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Больше';
    } else {
        resultMessage.textContent = 'Меньше';
    }

    attempts.textContent = `Попытки: ${attemptCount}`;
});

resetGame.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    resultMessage.textContent = '';
    attempts.textContent = 'Попытки: 0';
    guessInput.value = '';
});
