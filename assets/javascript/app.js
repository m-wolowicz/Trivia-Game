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
	var timer;			//Holds the timer for the game
	var right; 			//Number of questions answered correctly
	var wrong; 			//Number of questions answered incorrectly
	var unanswered; 	//Number of unanswered questions

	//All questions inside an array of objects
	var allQuestions = [
		{	question: "What state is Kenneth originally from?",
			choices: [	"Florida",
						"New York",
						"Alabama",
						"Georgia",
						"Arkansas"]
			rightAnswrIndx: 4,
			image: "../images/Q1_Kenneth.jpg"
			answerText: "Kenneth Parcel is originally from Stone Mountain, Georgia."
		},

		{	question: "What type of instrument does Jack play?",
			choices: [	"Piano",
						"Guitar",
						"Flute",
						"Violin",
						"Drums"]
			rightAnswrIndx: 3,
			image: "../images/Q2_Jack.jpg"
			answerText: "Jack plays the flute. Condoleezza Rice challenged Jack to a piano vs. jazz flute musical duel."
		},

		{	question: "In what tough neighborhood was Tracy's Little League team located?",
			choices: [	"Midtown",
						"Hunts Point",
						"Brownsville",
						"Hell's Kitchen",
						"Knuckle Beach"]
			rightAnswrIndx: 5,
			image: "../images/Q3_Tracy.jpg"
			answerText: "Tracy is ordered to do community service in the form of coaching the Knuckle Beach Little League Baseball Team."
		},

		{	question: "Jenna states that she plans to donate her cut hair to which charity?",
			choices: [	"Locks of Love",
						"Merkins of Hope",
						"Wigs For Kids",
						"Pantene Beautiful Lenghts",
						"Angel Hair For Kids"]
			rightAnswrIndx: 2,
			image: "../images/Q4_Jenna.jpg"
			answerText: "Jenna was turned down by Locks of Love and instead will donate her hair follicles to Merkins of Love"
		},

		{	question: "Which company ends up buying NBC in Season 4?",
			choices: [	"Kabletown",
						"Sheinhardt Wig Company",
						"Telemundo",
						"G.E.",
						"AHP Chanagi Party Meats"]
			rightAnswrIndx: 1,
			image: "../images/Q5_NBC.jpg"
			answerText: "Jenna was turned down by Locks of Love and instead will donate her hair follicles to Merkins of Love"
		},

		{	question: "What is Liz extremely self-conscious about?",
			choices: [	"Her muffin top",
						"The scar on her face",
						"Her feet",
						"Her thin lips",
						"Her eating habits"]
			rightAnswrIndx: 3,
			image: "../images/Q6_Liz.jpg"
			answerText: "Liz Lemon's tropical paradise includes wearing socks and sandals on the beach, because she is self-conscious about her feet."
		},

		{	question: "Liz has a 'history' with one of Tracy's friends. Who is that friend?",
			choices: [	"Dotcom",
						"Jeremy (Tracy's Lizard)",
						"Kenneth",
						"Grizz",
						"Donald"]
			rightAnswrIndx: 4,
			image: "../images/Q7_Grizz.jpg"
			answerText: "Liz has a 'history' with Grizz. The two are seen passionately kissing at Kenneth's party."
		},		

		{	question: "Sheinhardt Wig Company 'accidentally' turned a great population of children into which color?",
			choices: [	"Orange",
						"Yellow",
						"Pink",
						"Green",
						"Blue"]
			rightAnswrIndx: 1,
			image: "../images/Q8_OrangeKids.jpg"
			answerText: "The company was allegedly leaking Auburn Fantasy Dye Number 260 into the Chicktaugua River, causing the children of Chickataugua to turn orange."
		},		

		{	question: "In the show's pilot, Liz buys an entire box of what food item?",
			choices: [	"Cheese",
						"Teamster Subs",
						"Sabor De Soledad",
						"Cheesy Blasters",
						"Hot Dogs"]
			rightAnswrIndx: 5,
			image: "../images/Q9_Food.jpg"
			answerText: "In the show's pilot, Liz is attempting to buy a hot dog before work. A fellow commuter tries to jump the line, then Liz buys $150 worth of hot dogs to make a point."
		},		

		{	question: "When Liz fantasizes of the perfect man for her, who does she picture?",
			choices: [	"Conan O'Brien",
						"Astronaut Mike Dexter",
						"Jon Bon Jovi",
						"James Franco",
						"Buzz Aldrin"]
			rightAnswrIndx: 2,
			image: "../images/10_MikeDexter.jpg"
			answerText: "Astronaut Mike Dexter is Liz's fantasy boyfriend that she compares all other men to."
		},		

	];

	


	//Timer Object
	timer = {

		time: 120,
		interval: null,

		start: function() {

			//Start the timer
			timer.interval = setInterval(timer.count, 1000);
			$("#timer").html(timer.time);
		},

		count: function() {

			//Decrement the timer by one second
			timer.time--;
			$("#time").html(timer.time);
			// if (timer.time == 0) {
			// 	clearInterval(timer.interval);
			// 	generateResults();

			}
		}



	

// FUNCTIONS
// =========

	//Function that starts a new game
	

	//Function that stops the game if user clicks DONE

	//


// MAIN PROCESS
//=============

	//Make sure all elements that need to be hidden are hidden from user

   

}); //IMPORTANT!

