function Component(){

}

Component.prototype.createParentDiv = function(id){
	var div  = document.createElement("div");
	div.id = id;
	return div;
}
 
Component.prototype.setQuestionTitle = function(text,parentDiv){
	var label = document.createElement("label");
	label.innerHTML = text;
	parentDiv.appendChild(label);
}
