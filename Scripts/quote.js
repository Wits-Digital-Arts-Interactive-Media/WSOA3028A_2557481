const quotes = [
    "May the Force be with you. - Obi-Wan Kenobi",
    "Life is like a box of chocolates; you never know what you're gonna get. - Forrest Gump",
    "Hasta la vista, baby. - Terminator 2: Judgment Day",
    "You shall not pass! - Gandalf",
    "Houston, we have a problem. - Apollo 13",
    "Here's looking at you, kid. - Casablanca",
    "You talking to me? - Taxi Driver"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  