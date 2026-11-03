//your JS code here. If required.
let Element=document.getElementById("level");
let count=0;
while(element){
	Element=Element.parentElement;
	if(Element){
		count++;
	}
}
alert("The level of the element is:+count");