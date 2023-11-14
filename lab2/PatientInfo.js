var patient = {firstname:"Nora", 
lastname:"Ahmed", 
gender:"Female",
Birthdate:"12/05/1980"};

var question = confirm("Would you like to reviw the patient information?");

if(question == true){
	var info="";
	for(var prop in patient)
		info += prop+" "+ patient[prop]+"\n";
	alert(info);
}
else
	alert("thank you");

var age = window.prompt("Enter your age please?" , "");

if(isNaN(age))
	window.alert("You did not enter an integer number");
else{
	if(age<12)
	document.write('<p style="background-color:gray; text-align:center; color:white;">You are a Child</p>');
else if(age <18)
	document.write('<p style="background-color:gray; text-align:center; color:white;">You are a Teenager</p>');
else 
	document.write('<p style="background-color:gray; text-align:center; color:white;">You are an Adult</p>');}
