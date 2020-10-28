/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
let hour = parseInt(time)
  if (hour < 12) {
    return `Good Morning`;
  } else if (hour >= 12 && hour <= 17){
    return `Good Afternoon`;
  } else {
    return `Good Evening`;
  }
};

function displayMessage (message) {
document.getElementById('greeting').innerText = message;
};

// need to remember that when using getElementById, I do not need the hashtag bc it is already getting by ID

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
