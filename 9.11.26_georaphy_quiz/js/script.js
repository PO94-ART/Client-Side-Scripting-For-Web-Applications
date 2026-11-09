//Find the quiz form
const quizForm = document.getElementById("quizForm");


//Run this code when the form is submitted
quizForm.addEventListener("submit", function(event) {

	//Stop the page from refreshing 
	event.preventDefault();

	//Start the score at zero
	let score = 0;

	// Get the answer to Question 1
	const answer1 = document.getElementById("answer1").value.trim().toLowerCase();

	// Find the result paragraph
	const result1 = document.getElementById("result1");

	//Check Question 1
	if (answer1 === "edinburgh") {
		result1.textContent = "Correct!";
		result1.className = "result correct";
		score++;
	} else {
		result1.textContent = "Incorrect!";
		result1.className = "result incorrect";
	}

	// Get the answer to Question 2
	const answer2 = document.getElementById("answer2").value.trim().toLowerCase();

	// Find the result paragraph
	const result2 = document.getElementById("result2");

	//Check Question 2
	if (answer2 === "paris") {
		result2.textContent = "Correct!";
		result2.className = "result correct";
		score++;
	} else {
		result2.textContent = "Incorrect!";
		result2.className = "result incorrect";
	}

	// Get the answer to Question 3
	const answer3 = document.getElementById("answer3").value.trim().toLowerCase();

	// Find the result paragraph
	const result3 = document.getElementById("result3");

	//Check Question 3
	if (answer3 === "egypt") {
		result3.textContent = "Correct!";
		result3.className = "result correct";
		score++;
	} else {
		result3.textContent = "Incorrect!";
		result3.className = "result incorrect";
	}

	// Get the answer to Question 4
	const answer4 = document.getElementById("answer4").value.trim().toLowerCase();

	// Find the result paragraph
	const result4 = document.getElementById("result4");

	//Check Question 4
	if (answer4 === "pacific" || answer4 === "pacific ocean") {
		result4.textContent = "Correct!";
		result4.className = "result correct";
		score++;
	} else {
		result4.textContent = "Incorrect!";
		result4.className = "result incorrect";
	}

	// Get the answer to Question 5
	const answer5 = document.getElementById("answer5").value.trim().toLowerCase();

	// Find the result paragraph
	const result5 = document.getElementById("result5");

	//Check Question 5
	if (answer5 === "south america") {
		result5.textContent = "Correct!";
		result5.className = "result correct";
		score++;
	} else {
		result5.textContent = "Incorrect!";
		result5.className = "result incorrect";
	}

	// Find the final score paragraph
	const finalScore = document.getElementById("finalScore");

	// Display the score
	finalScore.textContent = "Your score is " + score + " out of 5.";

	// Find the final result paragraph
	const finalResult = document.getElementById("finalResult");

	// Check whether the user has passed
	if (score >= 3) {
		finalResult.textContent = "Pass!";
		finalResult.className = "result correct";
	} else {
		finalResult.textContent = "Fail!";
		finalResult.className = "result incorrect";
	}

});