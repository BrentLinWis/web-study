function change(fn){
	switch(fn){
		case 1:
			document.getElementById("content").innerHTML="Hey!your HTML content has been changed...";	
			break;
		case 2:
			document.getElementById("content").style.color="red";
			break;
		case 3:
			document.getElementById("content").style.fontWeight="bold";
			break;
		case 4:
			document.getElementById("content").style.display="none";
			break;
	}
	
	
}