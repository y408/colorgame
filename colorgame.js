 var colourdisplay = document.querySelector('#colourdisplay');
 var displaymessage = document.querySelector('#displaymessage');
 var squares = document.querySelectorAll('.squares');
 var h1 =document.querySelector('h1');
 var resetbutton = document.querySelector('#reset')

 var colors = generaterandomcolours(6);
 var pickedcolors = colors[Math.floor(Math.random() * 5)];

 game();

 function game() {
 	colourdisplay.innerHTML = pickedcolors;
 	for(var i = 0; i < squares.length; i++){
 		squares[i].style.backgroundColor = colors[i];

 		squares[i].addEventListener('click', function() {
 			var squareColor = this.style.backgroundColor;
	 		if(squareColor == pickedcolors) {
	 			displaymessage.innerHTML ='correct'
	 			for(var i = 0; i < squares.length; i++){
	 				squares[i].style.backgroundColor = squareColor
	 			}
	 		    h1.style.backgroundColor = squareColor;
	 		    resetbutton.innerHTML= 'play again'
	 		} else {
	 			displaymessage.innerHTML ='try again'
	 			this.style.backgroundColor = '#232323'
	 		}
 		})

 		
 	}
 }

 resetbutton.addEventListener('click', function() {
 	colors = generaterandomcolours(6);
 	pickedcolors = colors[Math.floor(Math.random() * 5)];
 	game();
 });
    

 function generaterandomcolours(numbers) {
 	var arr = [];
 	for( var i = 0; i < numbers ; i++){
 		var r = Math.floor(Math.random() * 255);
 	    var g = Math.floor(Math.random() * 255);
 	    var b = Math.floor(Math.random() * 255);
 	    var color = "rgb(" + r + ", " + g + ", " + b +")"; 

 	    arr.push(color);
 	}
 	return