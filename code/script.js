// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let Name = prompt("What is your name?");
if (Name !== null) {
  alert("Hi, " + Name + "! Welcome!");
} else {
  alert("Hi there! Nice to meet you!");
}

// Step 2 - Food choice
let userInput = prompt("Please select a food type:\n1. Pizza\n2. Pasta\n3. Salad");

let selectedOption = parseInt(userInput);

// Declare the following variables outside the if-else blocks
let pizzaSubtype, pastaSubtype, saladSubtype;

if (selectedOption === 1) {
  alert("You have selected Pizza!");

  // Step 3 - Subtype choice
  pizzaSubtype = prompt("Please select a pizza subtype:\n1. Margherita\n2. Pepperoni\n3. Veggie");

  if (pizzaSubtype === "1") {
    alert("You have selected Margherita Pizza!");
  } else if (pizzaSubtype === "2") {
    alert("You have selected Pepperoni Pizza!");
  } else if (pizzaSubtype === "3") {
    alert("You have selected Veggie Pizza!");
  } else {
    alert("Invalid choice. Please select a valid subtype.");
  }

} else if (selectedOption === 2) {
  alert("You have selected Pasta!");

  // Step 3 - Subtype choice
  pastaSubtype = prompt("Please select a pasta:\n1. Spaghetti\n2. Fettuccine Alfredo\n3. Pasta Agli Oglio");

  if (pastaSubtype === "1") {
    alert("You have selected Spaghetti Pasta!");
  } else if (pastaSubtype === "2") {
    alert("You have selected Fettuccine Alfredo Pasta!");
  } else if (pastaSubtype === "3") {
    alert("You have selected Pasta Agli Oglio!");
  } else {
    alert("Invalid choice. Please select a valid subtype.");
  }

} else if (selectedOption === 3) {
  alert("You have selected Salad!");

  // Step 3 - Subtype choice
  saladSubtype = prompt("Please select a salad:\n1. Caesar Salad\n2. Greek Salad\n3. Garden Salad");

  if (saladSubtype === "1") {
    alert("You have selected Caesar Salad!");
  } else if (saladSubtype === "2") {
    alert("You have selected Greek Salad!");
  } else if (saladSubtype === "3") {
    alert("You have selected Garden Salad!");
  } else {
    alert("Invalid choice. Please select a valid subtype.");
  }
} else {
  alert("Invalid choice. Please select a valid option.");
}

// Step 4 - Age
let userInputAge = prompt("Is this meal for a child or an adult? Please enter your age");
let age = parseInt(userInputAge);

if (!isNaN(age)) {
  let ageGroup = (age < 11) ? "child" : "adult";

  // Step 5 - Order confirmation
  let foodTypeText;
  let foodPrice;

  if (selectedOption === 1) {
    if (pizzaSubtype === "1") {
      foodTypeText = "Margherita Pizza";
    } else if (pizzaSubtype === "2") {
      foodTypeText = "Pepperoni Pizza";
    } else if (pizzaSubtype === "3") {
      foodTypeText = "Veggie Pizza";
    }
  } else if (selectedOption === 2) {
    if (pastaSubtype === "1") {
      foodTypeText = "Spaghetti Pasta";
    } else if (pastaSubtype === "2") {
      foodTypeText = "Fettuccine Alfredo Pasta";
    } else if (pastaSubtype === "3") {
      foodTypeText = "Pasta Agli Oglio";
    }
  } else if (selectedOption === 3) {
    if (saladSubtype === "1") {
      foodTypeText = "Caesar Salad";
    } else if (saladSubtype === "2") {
      foodTypeText = "Greek Salad";
    } else if (saladSubtype === "3") {
      foodTypeText = "Garden Salad";
    }
  }

  if (ageGroup === "child") {
    foodPrice = 7;  // Child's price
  } else {
    foodPrice = 12; // Adult's price
  }

  let confirmationMessage = `You have chosen a ${ageGroup} ${foodTypeText} for $${foodPrice}. Would you like to confirm your order? \n1. Yes \n2. No`;

  let confirmation = prompt(confirmationMessage);

  if (confirmation === "1") {
    alert("Thank you for choosing Javascript Pizzeria! Your order is now being made. Enjoy!");
  } else if (confirmation === "2") {
    alert("Thank you for considering us. Feel free to return for future orders!");
  }

} else {
  alert("Invalid input. Please enter a valid age.");
}
