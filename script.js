//Counter function
function counterReducer(actionType, counter){
	if(actionType== 'INC') {
		return counter+1;
	}
	else if(actionType=='DEC') {
		return counter-1;
	}
	else {
		return "Please enter correct value";
	}
}

var count= 0;
console.log("Counter value is : " + count);
console.log("Incremented value is :" + counterReducer('INC',count));
console.log("Decremented value is :" + counterReducer('DEC',count));