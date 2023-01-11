let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");


const url = "https://apis.ccbp.in/random-quote";
let loadQuote = async () => {
    spinnerEl.classList.remove("d-none");
    let response = await fetch(url);
    let jsonData = await response.json();
    spinnerEl.classList.add("d-none");
    quote = jsonData.content;
    quoteDisplayEl.textContent = quote;
};

let seconds;

function counter() {
    initial = 0;
    interval = 1000;
    window.seconds = setInterval(function() {
        timerEl.textContent = initial;
        initial++;
    }, interval);
}

function checkAnswer() {
    console.log("submit");
    answer = quoteInputEl.value;
    if (answer === quoteDisplayEl.textContent) {
        clearInterval(window.seconds);
        timeTaken = timerEl.textContent;
        resultEl.textContent = `You typed in ${timeTaken} seconds.`;
    } else {
        resultEl.textContent = "You typed incorrect sentance.";
    }
}
resetBtnEl.addEventListener("click", function() {
    quoteInputEl.value = "";
    resultEl.textContent = "";
    loadQuote();
    clearInterval(window.seconds);
    counter();
});

loadQuote();
counter();
submitBtnEl.addEventListener("click", checkAnswer);