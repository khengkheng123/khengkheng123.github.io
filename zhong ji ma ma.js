// Title: Working method without using buleon

// alert("Hello! Welcome to zhong ji mi ma game!")

// var correctnumber=25

// while (guess!=correctnumber)
// {

// var guess=prompt("guess your number!")

// 	if(guess==25){alert("correct!")} 

// 		else if(guess>25){alert("Lower, please guess again!")}

// 			else if(guess<25){alert("Higher, please guess again!")} 
// 	

// Truefalse buleon method - comments
// alert("Hello! Welcome to zhong ji mi ma game!")

// var correctnumber=25
// var check=true
// var tries = tries++


// while (check==true)
// {
// 	var guess = prompt("What is your number?")

// 		if(guess==25){alert("correct!");check=false} 

// 			else if(guess>25){alert("Lower, please guess again!")}

// 				else if(guess<25){alert("Higher, please guess again!")} 
// 		}


//Title: Proper While loop

// alert("Hello! Welcome to zhong ji mi ma game!")

// var correctnumber=25
// var check=true
// var tries = 0

// while(check==true){
// 	if(tries == 5){
// 		alert("go fly kite");
// 		check=false;
// 	}else{
// 	var guess = parseInt(prompt("What is your number?"));
// 		tries++;
// 		if(guess==25){
// 			alert("correct!");
// 			check=false;
// 		} else if(guess>25){
// 			alert("Lower, please guess again!")
// 		}else if(guess<25){
// 			alert("Higher, please guess again!")
// 		}else{
// 			alert("Key properly!")
// 		}
// 	}
// } 

	

// alert("Hello! Welcome to zhong ji mi ma game!")

// var correctnumber=25

// var guess=prompt("guess your number!")

// 	if(guess==25){alert("correct!")} 

// 		else if(guess>25){alert("Lower, please guess again!")}

// 			else if(guess<25){alert("Higher, please guess again!")}




alert("Hello! Welcome to zhong ji mi ma game!")

var correctnumber=25
var check=true

// the tries<5 is the condition to enter. If put tries ==5, wont enter

for(var tries=0; tries<5; tries++){	
console.log("HI");	
	if(tries == 5){
		alert("go fly kite");
		}
		else{
		var guess = parseInt(prompt("What is your number?"));
		console.log(guess);
		console.log(tries);
		if(guess==25){
			alert("correct!");
			tries=5;
		} else if(guess>25){
			alert("Lower, please guess again! You have" +tries+ "tries left")
		}else if(guess<25){
			alert("Higher, please guess again! You have" +tries+ "tries left")
		}else{
			alert("Key properly!")
		}
	}
} 
