
const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Stay positive, work hard, make it happen.",
    "Don’t watch the clock; do what it does. Keep going."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
  }
  