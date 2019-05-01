
function RadioGroup(data){
	this.data = data;
	this.domComponent = null;
	this.selectedValue = null;
}

RadioGroup.prototype = new Component();

RadioGroup.prototype.createComponent = function(){
	var parentDiv = this.createParentDiv(this.data.id);
	this.setQuestionTitle(this.data.title,parentDiv);
	this.createRadioGroup(parentDiv);
	this.domComponent = parentDiv;
}

RadioGroup.prototype.createRadioGroup = function(parentDiv){
	var temp = this;
	var radioGroup = document.createElement("div");
	radioGroup.id = "radio-group-"+this.data.id;
	var options = this.data.options;
	for(var i=0;i<options.length;i++){
		var label = document.createElement("label");
		var radio = document.createElement("input");
		
		radio.onclick = function(){
			if(data.length == currentQuestion+1){
				document.getElementById("submit").disabled = false;
			}
			temp.selectedValue = this.value;
		}
		radio.type = "radio";
		radio.name = "answer";
		radio.value = options[i];
		label.appendChild(radio);
		label.appendChild(document.createTextNode(options[i]));
		radioGroup.appendChild(label);
	}
	parentDiv.appendChild(radioGroup);
	
}
RadioGroup.prototype.getComponent = function(){
	return this.domComponent;
}


