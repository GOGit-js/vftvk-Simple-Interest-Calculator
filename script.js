function compute(){	  
//  display alert if principal input value is not numeric and > 0 
    var principal = document.getElementById("principal").value;
    if(isNaN(principal) || principal <= 0) {
            alert("Enter a positive number");
			document.getElementById("result").innerHTML="";    //clean up message 
            document.getElementById("principal").focus();      //focus principal


    } else {
// compute and display text	
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br\>at an interest rate of <mark>"+rate+"%</mark>,<br\>You will receive an amount of <mark>"+interest.toFixed(2)+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    }
}
  
//  display the rate value when slider is moved    
    function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";	
}

// validate when <enter> is pressed
   document.addEventListener("keyup", function(event) {
    if (event.code === "Enter" || (event.keyCode === 13)) {
		var principal = document.getElementById("principal").value;
        if(isNaN(principal) || principal <= 0) {
            alert("Enter a positive number");
		    document.getElementById("result").innerHTML="";    //clean up message 
            document.getElementById("principal").focus();      //focus principal
		}
    }
});



