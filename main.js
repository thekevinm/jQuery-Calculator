$(document).ready(function() {
	$(".button").click(function(){
		document.getElementById("screen").value += this.value;
	});
	var result = 0;
	var prevEntry = 0;
	var currentEntry = '0';
	var operation = null;
	updateScreen(result);

	$('.button').on('click', function(evt){
		var buttonPressed = $(this).html();
		console.log(buttonPressed);

		if (buttonPressed === "C") {
			result = 0;
			currentEntry = '0';
		} else if (buttonPressed === "1"){
			result = 0;
			currentEntry = '1';
		} else if (buttonPressed === "2"){
			result = 0;
			currentEntry = '2';
		} else if (buttonPressed === "3"){
			result = 0;
			currentEntry = '3';
		} else if (buttonPressed === "4"){
			result = 0;
			currentEntry = '4';
		} else if (buttonPressed === "5"){
			result = 0;
			currentEntry = '5';
		} else if (buttonPressed === "6"){
			result = 0;
			currentEntry = '6';
		} else if (buttonPressed === "7"){
			result = 0;
			currentEntry = '7';
		} else if (buttonPressed === "8"){
			result = 0;
			currentEntry = '8';
		} else if (buttonPressed === "9"){
			result = 0;
			currentEntry = '9';
		} else if (buttonPressed === '.') {
			currentEntry += '.'
		} else if (isNumber(buttonPressed)) {
			if (currentEntry === '0') currentEntry = buttonPressed;
			else currentEntry = currentEntry + buttonPressed;
		} else if (isOperator(buttonPressed)) {
			prevEntry = parseFloat(currentEntry);
			operation = buttonPressed;
			currentEntry = '';
		} else if (buttonPressed === '=') {
			currentEntry = operate(prevEntry, currentEntry, operation);
			operation = null;
		}
		updateScreen(currentEntry);

	});
});

updateScreen = function(displayValue) {
	var displayValue = displayValue.toString();
	$('#screen').html(displayValue.substring(0, 10));
};

isNumber = function(value) {
	return !isNaN(value);
}

isOperator = function(value) {
	return value === '/' || value === '*' || value === '+' || value === '-';
};

operate = function(a, b, operation) {
	a = parseFloat(a);
	b = parseFloat(b);
	console.log(a, b, operation);
	if (operation === '+') return a + b;
	if (operation === '-') return a - b;
	if (operation === '/') return a / b;
	if (operation === '*') return a * b;
};


