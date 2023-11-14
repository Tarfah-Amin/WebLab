function VisitPage(){
	var question = confirm("Do you want to visit this page?");

	return question;
	
}
function bodyfun(){
	var X= document.getElementsByTagName("h1")[0].innerHTML;
	localStorage.setItem("WORD", X);
}
function funload(){
	document.getElementById("Newadded").innerHTML =localStorage.getItem("WORD");
	
}