
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
        resultMessage.textContent = 'Пожалуйста, введите число от 1 до 100.';
    } else if (userGuess === randomNumber) {
        resultMessage.textContent = `Поздравляем! Вы угадали число за ${attemptCount} попыток!`;
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Слишком мало. Попробуйте снова!';
    } else {
        resultMessage.textContent = 'Слишком много. Попробуйте снова!';
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
