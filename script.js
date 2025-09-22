function fortuneTeller(name, age) {
  let fortune = "";

  // Name 
  if (name.length > 7) {
    fortune += "will marry late in life.";
  } else if (name.length < 5) {
    fortune += "will marry within a year.";
  } else {
    fortune += "will encounter a once-in-a-lifetime opportunity.";
  }

// Letter R
  if (name.charAt(0).toLowerCase() === 'r') {
    fortune += "will be rich.";
  }


// Letter I
  if (name.toLowerCase().includes('i')) {
    fortune += "will fall in love this week.";
  }

  // Age
  if (age < 18) {
    fortune += "will pass all your tests this year.";
  } else if (age >= 18 && age <= 30) {
    fortune += "will buy your dream car.";
  } else {
    fortune += "will meet and marry your soul mate.";
  }

  return fortune;
}

// Form Submission
document.getElementById("fortuneForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);


// Error Message
  if (!name || isNaN(age)) {
    alert("Please enter valid name and age.");
    return;
  }

  const fortune = fortuneTeller(name, age);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `${name} ${fortune}`;

});