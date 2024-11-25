document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    "Horrible people films...",
    "Dough films...",
    "The giraffe in the kitchen films...",
  ];

  // Select a random quote for each visit
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById("quote");

  function typeQuote(quote) {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < quote.length) {
        quoteElement.textContent += quote[charIndex];
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          quoteElement.textContent = ""; // Clear text after showing it for 6 seconds
          setTimeout(() => typeQuote(quote), 200); // Restart typing the same quote
        }, 6000);
      }
    }, 100);
  }

  typeQuote(quote);
});
