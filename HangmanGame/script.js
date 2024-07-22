const hintText = document.querySelector('.hint-text b');
const wordDisplay = document.querySelector('.word-display');
let hangmanBox = document.querySelector('.hangman-box img');
const Keyboard = document.querySelector('.keyboard');
const gameModal = document.querySelector('.game-modal');
const playAgain = gameModal.querySelector('.play-again')

let currentWord, wrongCount, currentLetters;
const maxGuessCount = 6;

function setGuessList() {
    currentLetters = []
    wrongCount = 0;
    hangmanBox.src = `images/hangman-0.svg`;
    document.querySelector('.guesses-text b').innerText = `${wrongCount} / ${maxGuessCount}`
    wordDisplay.innerHTML = currentWord.split('').map(() => `<li class='letter'></li>`).join('');
    Keyboard.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}
function getHintWord() {
    // Select the random word in wordlist:
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)]
    currentWord = word
    hintText.innerText = hint;
    setGuessList();
}
getHintWord();
playAgain.addEventListener('click', getHintWord);

//gameOver:
function gameOver(isVictory) {
    // After game complete.. showing modal with relevant details
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

function initGuessWord(button, letter) {
    if (currentWord.includes(letter)) {
        [...currentWord].forEach((letteriterate, index) => {
            if (letter == letteriterate) {
                currentLetters.push(letter);
                wordDisplay.querySelectorAll('li')[index].innerText = letter;
                wordDisplay.querySelectorAll('li')[index].classList.add('guessed')
            }
        })
    } else {
        wrongCount++;
        hangmanBox.src = `images/hangman-${wrongCount}.svg`;
    }
    button.disabled = true;
    document.querySelector('.guesses-text b').innerText = `${wrongCount} / ${maxGuessCount}`

    if (wrongCount == maxGuessCount) return gameOver(false);
    if (currentLetters.length == currentWord.length) return gameOver(true)
}
//set the Keyboard button:
for (let i = 97; i <= 122; i++) {  // Must use let in for-loop don't use var or something
    button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    Keyboard.appendChild(button);
    button.addEventListener('click', function (e) {
        initGuessWord(e.target, String.fromCharCode(i));
    })
}