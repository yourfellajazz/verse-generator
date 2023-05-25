const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// let apiQuotes=[];

//NEW QUOTE//
function newQuote() {
    //random quote is picked from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random()* localQuotes.length)];
    authorText.textContent = quote.author;
    // if character length is too big. 
    if (quote.text.length>50) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text; 
}

// Get verses from API //
// async function getQuotes(){
//     const apiUrl = "";
//     try {
//         const response = await fetch (apiUrl); 
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error){
//         // catch error here // 
//     }
// }

// TWEET verse
function tweetQuote(){
    const twitterURL= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, "_blank");
}

//event listeners. declaring function before calling

newQuoteBtn.addEventListener("click",newQuote);
twitterBtn.addEventListener ("click", tweetQuote);

// On LOAD//
newQuote();
