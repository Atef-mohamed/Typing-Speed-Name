// Array Of Words

const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Twon",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Network",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
];

// Setting Levels
const lvls = {
  "Easy": 6,
  "Normal": 3,
  "Hard": 2,
};

// let defaultLevelName = "Normal"; //Change Levels From Here
// let defaultLevelSeconds = lvls[defaultLevelName];

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let lvlSelect = document.querySelector("select");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let tryAgin = document.querySelector(".try");
let defaultLevelSeconds = lvls[lvlSelect.value];
secondsSpan.innerHTML = defaultLevelSeconds;

// Setting Level Name + Sec + Score

// lvlNameSpan.innerHTML = defaultLevelName;
// secondsSpan.innerHTML = defaultLevelSeconds;
// timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Pase Event
input.onpaste = function () {
  return false;
};

// Start Game
startButton.onclick = function () {
//   this.remove();
startButton.style.display="none";

  input.focus();
  if (lvlSelect.value === "Normal") {
    let defaultLevelSeconds = lvls[lvlSelect.value];
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    
  } else if (lvlSelect.value === "Hard") {
    let defaultLevelSeconds = lvls[lvlSelect.value];
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
  } else {
    let defaultLevelSeconds = lvls[lvlSelect.value];
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
  }
  // Generate Word Function
  genWords();
};

function genWords() {
  // Get Random Word From Array
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // Get Word Index
  let wordIndex = words.indexOf(randomWord);
  // Remove word From Array
  words.splice(wordIndex, 1);
  // Show The Random Word
  theWord.innerHTML = randomWord;
  // Empty UpComing Words
  upcomingWords.innerHTML = "";
  // Generate Words
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }
  // Start Play Function
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = lvls[lvlSelect.value];
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);
      // Compare Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty input Field
        input.value = "";
        // increase Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          genWords();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          let spanTxt = document.createTextNode("Good Job");
          span.appendChild(spanTxt);
          finishMessage.appendChild(span);
          // remove UpcomingWords
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let spanTxt = document.createTextNode("Game Over");
        span.appendChild(spanTxt);
        finishMessage.appendChild(span);
        tryAgin.classList.add("hide");
         tryAgin.onclick =()=>{
            location.reload();
        }
        // location.reload();
      }
    }
  }, 1000);
}
