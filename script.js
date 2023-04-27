function calculate() {
    const principal = parseInt(document.getElementById("principal").value);
    const interest = parseFloat(document.getElementById("interest").value);
    const years = parseInt(document.getElementById("years").value);
  
    if (isNaN(principal) || isNaN(interest) || isNaN(years)) {
      document.getElementById("result-container").innerHTML = "Please enter valid inputs.";
      return;
    }
  
    const amount = principal * Math.pow(1 + interest/100, years);
  
    const userAnswer = parseFloat(document.getElementById("user-answer").value);
  
    if (isNaN(userAnswer)) {
      document.getElementById("result-container").innerHTML = "Please enter a number.";
      return;
    }
  
    if (Math.abs(userAnswer - amount) <= 0.1) {
      document.getElementById("result-container").innerHTML = "Correct! You got it right.";
    } else {
      document.getElementById("result-container").innerHTML = `Sorry, the correct answer is ${amount.toFixed(2)}.`;
    }
  }
  