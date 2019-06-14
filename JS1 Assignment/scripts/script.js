//Create a global variable called arrayLength and instantiate it with a value of 0.
var arrayLength = 0;

// fetch data from an API  Question 1
fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes/70")
  .then(result => result.json())
  .then((jsonResult) => {
    arrayLength = jsonResult.length;
    populateCards(jsonResult);
  })

// create populateCards function here remember to use a for loop and dont forget a parameter needs to be passed in.
function populateCards(result){
  for (var i = 0; i < result.length; i++) {
    document.getElementById("container").innerHTML +=
      "<div id='" + "card" + i + "'>" +
      "<h4>" + "Card Number: " + i + "</h4>" +
      "<h6>" + result[i] + "</h6>" +
      "</div>";
  }
}
//When the DOM is loaded please hide the test card inside your HTML. Note the test card has an id attached to it
document.addEventListener('DOMContentLoaded', function(){
        document.getElementById('test-card').style.display = "none";
});

// This is linked to question 4
/*Lastly inside the else statement, if all the criteria was met. Please remove the card from users screen. **HINT select the id which you created for each of the cards and use CSS to hide it.*/

function testInput(){
  // value changed and updated parsed to a number for you.
  var inputVal = Number(document.getElementById("cardNumber").value);


  //write a variable here that will return a boolen use regex to text whether or not the variable will be true or false
var result = /^\d+$/.test(inputVal);

  //Please place the condition in for the test
  if(!result){
      alert("Please enter a number");
  }
  // please place the condition for the test.
  else if(inputVal >= arrayLength || inputVal < 0){
      alert("Sorry the number you chose is greater than the size of the array");
  }
  else{
      // before the alert pops up please remove the card from the DOM.
      alert("Everything was correct the card has been removed.");
  }
}
