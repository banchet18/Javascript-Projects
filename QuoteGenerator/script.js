let Quotes = [];

function newQuotes() {
  const Quote = Quotes[Math.floor(Math.random() * Quotes.length)];
  console.log(Quote);
}

async function getQuotes() {
  const apiQuotes = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiQuotes);
    Quotes = await response.json();
    newQuotes();
  } catch (error) {}
}

getQuotes();
