//your JS code here. If required.
let Element=document.getElementById("level");
let count=0;
while(Element){
	count++;
	Element=Element.parentElement;
	}

alert("The level of the element is:+count");