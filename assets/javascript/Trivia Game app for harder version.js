/* 
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



	//All questions inside an array of objects
	var allQuestions = [
		{	question: "What state is Kenneth originally from?",
			choices: [	"Florida",
						"New York",
						"Alabama",
						"Georgia",
						"Arkansas"],
			rightAnswrIndx: 4,
			image: "../images/Q1_Kenneth.jpg",
			answerText: "Kenneth Parcel is originally from Stone Mountain, Georgia."
		},

		{	question: "What type of instrument does Jack play?",
			choices: [	"Piano",
						"Guitar",
						"Flute",
						"Violin",
						"Drums"],
			rightAnswrIndx: 3,
			image: "../images/Q2_Jack.jpg",
			answerText: "Jack plays the flute. Condoleezza Rice challenged Jack to a piano vs. jazz flute musical duel."
		},

		{	question: "In what tough neighborhood was Tracy's Little League team located?",
			choices: [	"Midtown",
						"Hunts Point",
						"Brownsville",
						"Hell's Kitchen",
						"Knuckle Beach"],
			rightAnswrIndx: 5,
			image: "../images/Q3_Tracy.jpg",
			answerText: "Tracy is ordered to do community service in the form of coaching the Knuckle Beach Little League Baseball Team."
		},

		{	question: "Jenna states that she plans to donate her cut hair to which charity?",
			choices: [	"Locks of Love",
						"Merkins of Hope",
						"Wigs For Kids",
						"Pantene Beautiful Lenghts",
						"Angel Hair For Kids"],
			rightAnswrIndx: 2,
			image: "../images/Q4_Jenna.jpg",
			answerText: "Jenna was turned down by Locks of Love and instead will donate her hair follicles to Merkins of Love"
		},

		{	question: "Which company ends up buying NBC in Season 4?",
			choices: [	"Kabletown",
						"Sheinhardt Wig Company",
						"Telemundo",
						"G.E.",
						"AHP Chanagi Party Meats"],
			rightAnswrIndx: 1,
			image: "../images/Q5_NBC.jpg",
			answerText: "Jenna was turned down by Locks of Love and instead will donate her hair follicles to Merkins of Love"
		},

		{	question: "What is Liz extremely self-conscious about?",
			choices: [	"Her muffin top",
						"The scar on her face",
						"Her feet",
						"Her thin lips",
						"Her eating habits"],
			rightAnswrIndx: 3,
			image: "../images/Q6_Liz.jpg",
			answerText: "Liz Lemon's tropical paradise includes wearing socks and sandals on the beach, because she is self-conscious about her feet."
		},

		{	question: "Liz has a 'history' with one of Tracy's friends. Who is that friend?",
			choices: [	"Dotcom",
						"Jeremy (Tracy's Lizard)",
						"Kenneth",
						"Grizz",
						"Donald"],
			rightAnswrIndx: 4,
			image: "../images/Q7_Grizz.jpg",
			answerText: "Liz has a 'history' with Grizz. The two are seen passionately kissing at Kenneth's party."
		},		

		{	question: "Sheinhardt Wig Company 'accidentally' turned a great population of children into which color?",
			choices: [	"Orange",
						"Yellow",
						"Pink",
						"Green",
						"Blue"],
			rightAnswrIndx: 1,
			image: "../images/Q8_OrangeKids.jpg",
			answerText: "The company was allegedly leaking Auburn Fantasy Dye Number 260 into the Chicktaugua River, causing the children of Chickataugua to turn orange."
		},		

		{	question: "In the show's pilot, Liz buys an entire box of what food item?",
			choices: [	"Cheese",
						"Teamster Subs",
						"Sabor De Soledad",
						"Cheesy Blasters",
						"Hot Dogs"],
			rightAnswrIndx: 5,
			image: "../images/Q9_Food.jpg",
			answerText: "In the show's pilot, Liz is attempting to buy a hot dog before work. A fellow commuter tries to jump the line, then Liz buys $150 worth of hot dogs to make a point."
		},		

		{	question: "When Liz fantasizes of the perfect man for her, who does she picture?",
			choices: [	"Conan O'Brien",
						"Astronaut Mike Dexter",
						"Jon Bon Jovi",
						"James Franco",
						"Buzz Aldrin"],
			rightAnswrIndx: 2,
			image: "../images/10_MikeDexter.jpg",
			answerText: "Astronaut Mike Dexter is Liz's fantasy boyfriend that she compares all other men to."
		},		

	];

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

	//This function sets up the order of each question to be generated
	function generateQuestion() {
		var oneQuestion = {

			question
			choices
			rightAnswrIndx
		}
	}


	//This function displays all the questions
	function displayQuestions(){
		for (var i = 0 ; i < allQuestions.length ; i++) {

			//Show elements necessary for questions to display correctly
			$("#gameCol").show();
			$("#containerOne").show();
			$("#questionDiv").show();
			$("#choicesDiv").show();

			//Display each question
			$("#question").append(allQuestions[i].question + "<br>");
				console.log(allQuestions[i].question);

			//Display each answer choices
			$("#choices").append(allQuestions[i].choices + "<br>");
				console.log(allQuestions[i].choices);


		

			
		}

	}

	





// MAIN PROCESS
//=============
beginGame();
displayQuestions();
	


   

}); //IMPORTANT!

