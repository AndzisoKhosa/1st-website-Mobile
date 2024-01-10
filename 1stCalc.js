const display = document.getElementById("display");

function appendToDisplay(input) {
		display.value += input;
}

function appendcToDisplay(input) {
	// for symbols
	display.value += " "+input+" ";
}
function delDisplay() {
	display.value = display.value.slice(0,-1);
}

function perc() {
	if(display.value.search(" ")==-1){
		display.value = eval(display.value/100);
	}
	else{
		display.value = eval(display.value.slice(display.value.lastIndexOf(" ")+1)/100);
	}
	
}
function clearDisplay() {
	display.value = "";
}

function calculate() {
	try{
		display.value = display.value.replaceAll("×","*");
		display.value = display.value.replaceAll("÷","/");
		display.value = eval(display.value);
	}
	catch(error){
		display.value = "Error";
	}
}

