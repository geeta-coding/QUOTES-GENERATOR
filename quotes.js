let quote = document.querySelector(".quote")
let person = document.querySelector(".person")
let btn = document.getElementById("new-quote")

person.addEventListener ("click" , fun = () => {
    console.log("this is a person ")

})


btn.addEventListener ("click" , fun = () => {
    console.log("button is clicked ")
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML= quotes[random].quote;
    person.innerHTML = quotes[random].person;

    


})

const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", person: "Walt Disney" },
  { quote: "Don’t let yesterday take up too much of today.", person: "Will Rogers" },
  { quote: "It’s not whether you get knocked down, it’s whether you get up.", person: "Vince Lombardi" },
  { quote: "If you are working on something exciting, it will keep you motivated.", person: "Steve Jobs" },
  { quote: "Success is not in what you have, but who you are.", person: "Bo Bennett" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", person: "Steve Jobs" },
  { quote: "I never dreamed about success, I worked for it.", person: "Estee Lauder" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", person: "Sam Levenson" },
  { quote: "Opportunities don't happen. You create them.", person: "Chris Grosser" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", person: "C.S. Lewis" }
];
