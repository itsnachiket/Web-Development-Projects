let quoteParaEl = document.getElementById("quotePara");
let authorNameEl = document.getElementById("authorPara");
let quoteButtonEl = document.getElementById("quoteButton");
let quoteIconEl = document.getElementById("quoteIconEl");
let tweetIconEl = document.getElementById("tweetIcon");
let tweetLinkEl = document.getElementById("tweetLink");

let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

const total_colors = colors.length;
let receivedQuotes;

function randomColor() {
    const currentColor = Math.floor(Math.random() * total_colors);
    document.body.style.backgroundColor = colors[currentColor];
    quoteButtonEl.style.backgroundColor = colors[currentColor];
    quoteParaEl.style.color = colors[currentColor];
    authorNameEl.style.color = colors[currentColor];
    quoteIconEl.style.color = colors[currentColor];
    tweetIcon.style.color = colors[currentColor];
}
randomColor()

function randomQuote(quotesLength) {
    const quoteNumber = Math.floor(Math.random() * quotesLength);
    return quoteNumber;
}


const getQuotes = async () => {
    const response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const jsonData = await response.json();
    let quotes = jsonData.quotes;
    let quoteNumber = randomQuote(quotes.length);

    let currentQuote = quotes[quoteNumber].quote;
    let currentAuthor = quotes[quoteNumber].author;

    quoteParaEl.textContent = currentQuote;
    authorNameEl.textContent = "- " + currentAuthor;
}

getQuotes();

quoteButtonEl.onclick = () => {
    randomColor()
    getQuotes();
}

tweetLinkEl.onclick = () => {
    let url = "https://twitter.com/intent/tweet?via=bhavandar&hashtags=quotesGenerator&text=" +
        quoteParaEl.textContent + "\n" + authorNameEl.textContent;
    tweetLinkEl.href = url;
}