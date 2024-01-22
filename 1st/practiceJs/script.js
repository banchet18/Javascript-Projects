const nextBtn = document.getElementById("nextBtn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

let data = [];

async function getQuotes() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    data = await response.json();
    nextBtnQuote();
  } catch (error) {}
}

function nextBtnQuote() {
  const QuoteData = data[Math.floor(Math.random() * data.length)];
  if (!QuoteData.author) {
    author.innerHTML = "UnKnown";
  } else {
    author.innerHTML = QuoteData.author;
  }
  quote.innerHTML = QuoteData.text;
}
function twitterQuote() {
  const twitterUrl = `
  https://twitter.com/intent/tweet?text=${quote.innerHTML}-${author.innerHTML}`;
  window.open(twitterUrl, "_blank");
}
nextBtn.addEventListener("click", nextBtnQuote);
twitterBtn.addEventListener("click", twitterQuote);

getQuotes();
