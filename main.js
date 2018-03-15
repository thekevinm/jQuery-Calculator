$(document).ready(function() {
	$(".button").click(function(){
		document.getElementById(".screen").value += this.value;
	});
	var result = 0;
	var prevEntry = 0;
	var currentEntry = '0';
	updateScreen(result);

	$('#button').on('click', function(evt){
		var buttonPressed = $(this).html();
		console.log(buttonPressed);

		if (buttonPressed === "C") {
			result = 0;
			currentEntry = '0';
		} else if (buttonPressed === "1"){
			result = 0;
			currentEntry = '1';
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
			currentEntry = operate(prevEntry, currentEntry);
		}
		updateScreen(currentEntry);

	});
});

updateScreen = function(displayValue) {
	var displayValue = displayValue.toString();
	$('.screen').html(displayValue.substring(0, 10));
};

isNumber = function(value) {
	return isNaN(value);
}

isOperator = function(value) {
	return value === '/' || value === '*' || value === '+' || value === '-';
};

operate = function(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	console.log(a, b);
	if (operate === '+') return a + b;
	if (operate === '-') return a - b;
	if (operate === '/') return a / b;
	if (operate === '*') return a * b;
};

