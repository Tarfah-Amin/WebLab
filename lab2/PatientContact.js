function func(){
	var info="";
	for(var i=1 ; i<9 ;i++){
	info += document.getElementById("PatientInfo")[i].value +"\n";
	
	}
	alert(info);
}