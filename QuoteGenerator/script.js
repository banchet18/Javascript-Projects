const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let Quotes = [];

//show new quote
function newQuotes() {
  const Quote = Quotes[Math.floor(Math.random() * Quotes.length)];
  console.log(Quote);

  //check if author field is blank and replace it with 'unknown'
  if (!Quote.author) {
    authorText.textContent = "UnKnown";
  } else {
    authorText.textContent = Quote.author;
  }
  //check Quote length to determine styling
  if (Quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = Quote.text;
}

async function getQuotes() {
  const apiQuotes = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiQuotes);
    Quotes = await response.json();
    newQuotes();
  } catch (error) {
    //catch error here
  }
}

//tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//Event listener
newQuoteBtn.addEventListener("click", newQuotes);
twitterBtn.addEventListener("click", tweetQuote);
//on load
getQuotes();
