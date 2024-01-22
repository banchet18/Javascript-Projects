const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let Quotes = [];

//show new quote
function newQuotes() {
  const Quote = Quotes[Math.floor(Math.random() * Quotes.length)];
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
//on load
getQuotes();
