window.onload = function generateDays() {

	'use strict';

	var days,years;
		
	for (days = 1; days <= 31; days++) {

		var optn = document.createElement("option");
		optn.text = days;
		optn.value = days;
		document.getElementById('selDay').options.add(optn);
	}
		
	for (years = 1905; years <= 2018; years++) {

		var optn = document.createElement("option");
		optn.text = years
		optn.value = years

		// if year is 2015 selected
        if (years == 2018) {
            optn.selected = true;
        }

		document.getElementById('selYear').options.add(optn);
	}
}

var d = new Date();
var monthArray = new Array();
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
for(m = 0; m <= 11; m++) {
    var optn = document.createElement("OPTION");
    optn.text = monthArray[m];
    // server side month start from one
    optn.value = (m+1);
 
    // if june selected
    if ( m == 0) {
        optn.selected = true;
    }
 
    document.getElementById('selMonth').options.add(optn);
}