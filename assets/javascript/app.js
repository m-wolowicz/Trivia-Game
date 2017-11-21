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
	var currentQuestion; 
	var correctAnswer; 
	var incorrectAnswer; 
	var unanswered; 
	var seconds; 
	var time; 
	var answered; 
	var userSelect;
	var messages = {
		correct: "Congratulations, feel free to high-five a million angels!",
		incorrect: "That's not the right answer." + "<br>" + '"No. No. It Okay. Don\'t Be Cry"',
		endTime: "Looks like you ran out of time!" + "<br>" + "But... It's never too late, it's never too late for now!",
		finished: "So, how'd you do?"
	};

	//All questions inside an array of objects
	var triviaQuestions = [
		{	question: "What state is Kenneth originally from?",
			answerList: [	"Florida",
						"New York",
						"Alabama",
						"Georgia",
						"Arkansas"],
			answer: 3,
			image: "assets/images/Q1_Kenneth.gif",
			answerText: "Kenneth Parcel is originally from Stone Mountain, Georgia."
		},

		{	question: "What type of instrument does Jack play?",
			answerList: [	"Piano",
						"Guitar",
						"Flute",
						"Violin",
						"Drums"],
			answer: 2,
			image: "assets/images/Q2_Jack.gif",
			answerText: "Jack plays the flute. Condoleezza Rice challenged Jack to a piano vs. jazz flute musical duel."
		},

		{	question: "In what tough neighborhood was Tracy's Little League team located?",
			answerList: [	"Midtown",
						"Hunts Point",
						"Brownsville",
						"Hell's Kitchen",
						"Knuckle Beach"],
			answer: 4,
			image: "assets/images/Q3_Tracy.jpg",
			answerText: "Tracy is ordered to do community service in the form of coaching the Knuckle Beach Little League Baseball Team."
		},

		{	question: "Jenna states that she plans to donate her cut hair to which charity?",
			answerList: [	"Locks of Love",
						"Merkins of Hope",
						"Wigs For Kids",
						"Pantene Beautiful Lenghts",
						"Angel Hair For Kids"],
			answer: 1,
			image: "assets/images/Q4_Jenna.gif",
			answerText: "Jenna was turned down by Locks of Love and instead will donate her hair follicles to Merkins of Love"
		},

		{	question: "Which company ends up buying NBC in Season 4?",
			answerList: [	"Kabletown",
						"Sheinhardt Wig Company",
						"Telemundo",
						"G.E.",
						"AHP Chanagi Party Meats"],
			answer: 0,
			image: "assets/images/Q5_NBC.jpg",
			answerText: "In season 4 NBC is being purchased by the Philadelphia-based cable company Kabletown, a fictionalized depiction of the acquisition of NBC Universal by Comcast in real life."
		},

		{	question: "What is Liz extremely self-conscious about?",
			answerList: [	"Her muffin top",
						"The scar on her face",
						"Her feet",
						"Her thin lips",
						"Her eating habits"],
			answer: 2,
			image: "assets/images/Q6_Liz.gif",
			answerText: "Liz Lemon's tropical paradise includes wearing socks and sandals on the beach, because she is self-conscious about her feet."
		},

		{	question: "Liz has a 'history' with one of Tracy's friends. Who is that friend?",
			answerList: [	"Dotcom",
						"Jeremy (Tracy's Lizard)",
						"Kenneth",
						"Grizz",
						"Donald"],
			answer: 3,
			image: "assets/images/Q7_Grizz.gif",
			answerText: "Liz has a 'history' with Grizz. The two are seen passionately kissing at Kenneth's party."
		},		

		{	question: "Sheinhardt Wig Company 'accidentally' turned a great population of children into which color?",
			answerList: [	"Orange",
						"Yellow",
						"Pink",
						"Green",
						"Blue"],
			answer: 0,
			image: "assets/images/Q8_OrangeKids.jpg",
			answerText: "The company was allegedly leaking Auburn Fantasy Dye Number 260 into the Chicktaugua River, causing the children of Chickataugua to turn orange."
		},		

		{	question: "In the show's pilot, Liz buys an entire box of what food item?",
			answerList: [	"Cheese",
						"Teamster Subs",
						"Sabor De Soledad",
						"Cheesy Blasters",
						"Hot Dogs"],
			answer: 4,
			image: "assets/images/Q9_Food.gif",
			answerText: "In the show's pilot, Liz is attempting to buy a hot dog before work. A fellow commuter tries to jump the line, then Liz buys $150 worth of hot dogs to make a point."
		},		

		{	question: "When Liz fantasizes of the perfect man for her, who does she picture?",
			answerList: [	"Conan O'Brien",
						"Astronaut Mike Dexter",
						"Jon Bon Jovi",
						"James Franco",
						"Buzz Aldrin"],
			answer: 1,
			image: "assets/images/Q10_MikeDexter.gif",
			answerText: "Astronaut Mike Dexter is Liz's fantasy boyfriend that she compares all other men to."
		},		

	];


// FUNCTIONS
// =========

	//This hides the game area on page load
	$("#gameCol").hide();
	
	//This captures user click on start button to create a new game
	$("#startBtn").on("click", function(){
		$(this).hide();
		newGame();
	});

	//This captures the user's click on the reset button to create a new game
	$("#startOverBtn").on("click", function(){
		$(this).hide();
		newGame();
	});

	//This function sets up the page for a new game emptying all areas and showing game area
	function newGame(){
		$("#gameCol").show();
		$("#finalMessage").empty();
		$("#correctAnswers").empty();
		$("#incorrectAnswers").empty();
		$("#unanswered").empty();
		$("#gif").hide();
		$("#gifCaption").hide();
		currentQuestion = 0;
		correctAnswer = 0;
		incorrectAnswer = 0;
		unanswered = 0;
		newQuestion();
	}

	//This function displays the next question
	function newQuestion(){
		$("#message").empty();
		$("#correctedAnswer").empty();
		$("#gif").hide();
		$("#gifCaption").hide();
		answered = true;
		
		//This function displays the new question
		$("#currentQuestion").html("Question " + (currentQuestion+1) + " of " + triviaQuestions.length);
		$(".question").html(triviaQuestions[currentQuestion].question);

		//This function displays the new questions's answer options in multiple choice type
		for(var i = 0; i <= 5; i++){

			var choices = $("<div>");
			choices.text(triviaQuestions[currentQuestion].answerList[i]);
			choices.attr({"data-index": i });
			choices.addClass("thisChoice");
			$(".answerList").append(choices);
		}

		//This sets the timer
		countdown();

		//When user clicks on n answer this will pause the time and display the correct answer to the question 
		$(".thisChoice").on("click",function(){
				userSelect = $(this).data("index");
				clearInterval(time);
				answerPage();
			});
		}

	//This function is for the timer countdown
	function countdown(){
		seconds = 15;
		$("#timeLeft").html("00:" + seconds);
		answered = true;
		//Sets a delay of one second before the timer starts
		time = setInterval(showCountdown, 1000);
	}

	//This function displays the countdown
	function showCountdown(){
		seconds--;
		$("#timeLeft").html("00:" + seconds);
		if(seconds < 1){
			clearInterval(time);
			answered = false;
			answerPage();
		}
	}

	//This function takes the user to the answer page after the user selects an answer or timer runs out
	function answerPage(){
		$("#currentQuestion").empty();
		$(".thisChoice").empty(); //Clears question page
		$(".question").empty();
		$("#gif").show();
		$("#gifCaption").show();

		var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
		var rightAnswerIndex = triviaQuestions[currentQuestion].answer;

		//This adds the gif that corresponds to this quesiton
		var gifImageLink = triviaQuestions[currentQuestion].image;
		var newGif = $("<img>");
		newGif.attr("src", gifImageLink);
		newGif.addClass("gifImg");
		$("#gif").html(newGif);

		//STILL TO DO
		//This adds a line of text below the gif that talks about why the answer is correct.
		var gifCaption = triviaQuestions[currentQuestion].answerText;
			newCaption = $("<div>");
			newCaption.html(gifCaption);
			newCaption.addClass("gifCaption");
			$("#gifCaption").html(newCaption);
		
		//This checks to see if user choice is correct, incorrect, or unanswered
		if((userSelect == rightAnswerIndex) && (answered === true)){
			correctAnswer++;
			$('#message').html(messages.correct);
		} else if((userSelect != rightAnswerIndex) && (answered === true)){
			incorrectAnswer++;
			$('#message').html(messages.incorrect);
			$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		} else{
			unanswered++;
			$('#message').html(messages.endTime);
			$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
			answered = true;
		}
		
		if(currentQuestion == (triviaQuestions.length-1)){
			setTimeout(scoreboard, 6000);
		} else{
			currentQuestion++;
			setTimeout(newQuestion, 6000);
		}	
	}

	//This fucntion displays all the game stats
	function scoreboard(){
		$('#timeLeft').empty();
		$('#message').empty();
		$('#correctedAnswer').empty();
		$('#gif').hide();
		$("#gifCaption").hide();

		$('#finalMessage').html(messages.finished);
		$('#correctAnswers').html("Correct Answers: " + correctAnswer);
		$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
		$('#unanswered').html("Unanswered: " + unanswered);
		$('#startOverBtn').addClass('reset');
		$('#startOverBtn').show();
		$('#startOverBtn').html("PLAY AGAIN");
	}

// MAIN PROCESS
//=============

}); //IMPORTANT!