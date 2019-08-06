function comprobar(){

	var pregunta1 = document.quiz.pregunta1.value;
	var pregunta2 = document.quiz.pregunta2.value;
	var pregunta3 = document.quiz.pregunta3.value;
	var correct = 0;


	if (pregunta1 == "2013") {
		correct++;
}
	if (pregunta2 == "7") {
		correct++;
}	
	if (pregunta3 == "3") {
		correct++;
	}
	
	var messages = ["Muy Bien :D", "Hmmm", "Mal:("];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Tu puntuaje " + correct + ".";
	}