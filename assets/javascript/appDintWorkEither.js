w/* 
GAME STRUCTURE:
===============
01. The game starts when the player hits the START button.
02. Once the game starts the is a clock countdown.
03. The time given is the total time to finish the whole game.
04. The game ends if the time runs out, Game Over.
05. The player can only guess one answer per question.
06. Include the timer so the player can see it.
07. All the questions are displayed at once.
08. There is a DONE button at the end, if the user is finished before the timer stops.
*/

//IMPORTANT!
$(document).ready(function(){

// GLOBAL VARIABLES
// ================

	//Define all global variables and objects
	var right; 				//Number of questions answered correctly
	var wrong; 				//Number of questions answered incorrectly
	var unAnswered; 		//Number of unanswered questions
	
	var timer;				//Holds the timer for the game
	var question;			//The current Question
	var arrChoices;			//The array of choices in each question
	var correctAnswerIndx;	//The index of the correct answer for each question
	var questionList;		//



	//All questions 
	var q1 = generateQuestion("What state is Kenneth originally from?", ["Florida", "New York", "Alabama", "Georgia", "Arkansas"], 4);
	displayQuestion("q1", q1);

	var q2 = generateQuestion("What type of instrument does Jack play?", ["Piano", "Guitar", "Flute", "Violin", "Drums"], 3);
	displayQuestion("q2", q2);

	var q3 = generateQuestion("In what tough neighborhood was Tracy's Little League team located?", ["Midtown", "Hunts Point", "Brownsville", "Hell's Kitchen", "Knuckle Beach"], 5);
	displayQuestion("q3", q3);

	var q4 = generateQuestion("Jenna states that she plans to donate her cut hair to which charity?", ["Locks of Love", "Merkins of Hope", "Wigs For Kids", "Pantene Beautiful Lenghts", "Angel Hair For Kids"], 2);
	displayQuestion("q4", q4);

	var q5 = generateQuestion("Which company ends up buying NBC in Season 4?", ["Kabletown", "Sheinhardt Wig Company", "Telemundo", "G.E.", "AHP Chanagi Party Meats"], 1);
	displayQuestion("q5", q5);

	var q6 = generateQuestion("What is Liz extremely self-conscious about?", ["Her muffin top", "The scar on her face", "Her feet", "Her thin lips", "Her eating habits"], 3);
	displayQuestion("q6", q6);

	var q7 = generateQuestion("Liz has a 'history' with one of Tracy's friends. Who is that friend?", ["Dotcom", "Jeremy (Tracy's Lizard)", "Kenneth", "Grizz", "Donald"], 4);
	displayQuestion("q7", q7);	

	var q8 = generateQuestion("Sheinhardt Wig Company 'accidentally' turned a great population of children into which color?", ["Orange", "Yellow", "Pink", "Green", "Blue"], 1);
	displayQuestion("q8", q8);	

	var q9 = generateQuestion("In the show's pilot, Liz buys an entire box of what food item?", ["Cheese", "Teamster Subs", "Sabor De Soledad", "Cheesy Blasters", "Hot Dogs"], 5);
	displayQuestion("q9", q9);	

	var q10 = generateQuestion("When Liz fantasizes of the perfect man for her, who does she picture?", ["Conan O'Brien", "Astronaut Mike Dexter", "Jon Bon Jovi", "James Franco", "Buzz Aldrin"], 2);
	displayQuestion("q10", q10);

// FUNCTIONS
// =========

	//This function initializes the game
	function beginGame() {

		//Showing and Hiding elements of the game
		$("#startBtn").show();
		$("#timer").hide();
		$("#gameCol").hide();
			$("#containerOne").hide();
				$("#questionDiv").hide();
				$("#choicesDiv").hide();
		$("#containerTwo").hide();
			$("#answerDiv").hide();
			$("#answerImgDiv").hide();
		$("#containerThree").hide();
			$("#gameOver").hide();
			$("#results").hide();
			$("#restart").hide();
				$("#restartBtn").hide();

		//Setting initial values for all variables
		var right = 0; 				
		var wrong = 0; 				
		var unAnswered = 0; 		
		var questionList = [];

		//This is an object for the timer that counts down for the entire duration of the game
		timer = {

			time: 180,
			interval: null,

			// Start the Timer:
			start: function() {
				timer.interval = setInterval(timer.count, 1000);
				$("#timer").html(timer.time);
			},

			//Count that decrements the timer by 1 second
			count: function() {
				timer.time--;
				$("#timer").html(timer.time);
				if (timer.time === 0) {
					clearInterval(timer.interval);
					generateResults();
				}
			}
		};
	}

	//This function sets up the order of elements in each question to be generated
	function generateQuestion(question, choicesArray, rightAnswer) {
		var oneQuestion = {
			text: question,
			answers: choicesArray,
			rightAnswer: answer
		};

		return oneQuestion;
	}
		console.log(oneQuestion); //Testing with Console.log

	//This function displays the questions
	function displayQuestion(name, question){
		
		//Create new variables to use
		var questionOutput = oneQuestion.text;
			questionOutput.addId("question");
			$("#containerOne").append(questionOutput);

		//Push all answers to a questionsList array for results later
		questionList.push({
			name: name,
			question: question
		});

		//Run a loop through each answers array to build radion button option
		if (oneQuestion.answers && oneQuestion.answers.length > 0) {
			for (var i = 0 ; i < oneQuestion.answers.length ; i++) {

				var id = name + '-' + oneQuestion.answers[i];

				var answers = $('<input type="radio"/>');
				answers.attr('name', name);
				answers.attr('id', id);
				answers.attr('value', i);

				var label = $('<label>').html(oneQuestion.answers[i]);
				label.attr('for', id);

			 	$('#question').append(answers);
			 	$('#question').append(label);
			}
		}
	}
		
function startNewGame() {
	//Starts a new game, shows and hide some HTML elements
	$("#startBtn").hide();
	$("#timer").show();
	$("#containerOne").show();
	$("#done-button").show();
	timer.start();

}
	





// MAIN PROCESS
//=============
	
	//Set up page for the begining of the game
	window.onload = function() {
		//On page load call beginGame function
	beginGame();
	}


generateQuestion();
displayQuestion();




}); //IMPORTANT!

