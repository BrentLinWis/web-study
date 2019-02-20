	
	function getData(pageName){
	// Ajax: XMLHttpRequest 物件專門用來和伺服器連線
	var req=new XMLHttpRequest();
	req.open("get", "http://10.32.25.185/"+pageName);
	req.onload = function(){ // load 事件，偵測連線的狀態結束
		//連線完成
		var content = document.getElementById("content");
		content.innerHTML = this.responseText;  //innerHTML表示內部的HTML
	};
	req.send(); //送出連線
	
	}
	
	var point={
	"x":3,
	"y":4,
	"get":function(){
	alert(this.x+"."+this.y);
	}
	};
console.log("the resolution is"+": "+window.screen.width+" x "+window.screen.height);  //DOM of screen object
console.log(point);
console.log(point.x);