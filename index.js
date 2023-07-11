//1. 1에서 100까지 랜덤한 숫자(정수)를 반환하는 변수 randomNumber를 선언하고 초기화하세요. math.random은 0부터 1까지 난수를 생성하는 것이고, 제일 작은 숫자가 1이니까 뒤에 +1을 해줘야 한다.
let randomNumber = Math.floor(Math.random() * 100) + 1;

//2. DOM 요소 5가지를 선택해서 변수로 선언해주세요. guesses, lastResult, lowOrHigh, guessSubmit, guessField
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

//3. 변수 2가지를 선언(let)해주세요. guessCount 초기값 1, restButton 선언만
let guessCount = 1;
let resetButton;

//4. 올바른 번호인지 확인하는 함수를 만들기 -> checkGuess
function checkGuess(event) {
  console.log(event);
  //event.preventDefault();
  const userGuess = Number(guessField.value);
  if (randomNumber === userGuess) {
    lastResult.textContent = '축하합니다';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '게임오버! 10회를 모두 사용하셨습니다';
    setGameOver();
  } else {
    lastResult.textContent = '틀렸어요!';
    if (randomNumber > userGuess) {
      lowOrHigh.textContent = `${userGuess}보다 UP!`;
    } else if (randomNumber < userGuess) {
      lowOrHigh.textContent = `${userGuess}보다 Down!`;
    }
  }
  guessCount++;
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  //생성한 DOM 요소 이름(텍스트 컨텐츠)을 '새 게임하기'로 바꾸기
  resetButton.textContent = '새 게임하기';
  //만든 DOM 버튼을 body 태그 안에 추가하기
  document.body.appendChild(resetButton);

  //reset 버튼을 click했을 때, 새 게임이 되게 하는 리스너, 새 게임 함수의 이름은 resetGame
  resetButton.addEventListener('click', resetGame);
}
function resetGame() {
  guessCount = 1;
  guessField.disabled = false;
  guessSubmit.disabled = false;
  resetButton.parentNode.removeChild(resetButton);
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessField.value = '';
  lowOrHigh.textContent = '';
  lastResult.textContent = '';
}
guessSubmit.addEventListener('click', checkGuess);
