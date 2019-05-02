function ComboBox(data){
	this.data = data;
	this.domComponent = null;
	this.selectedValue = null;
}

ComboBox.prototype = new Component();

ComboBox.prototype.createComponent = function(){
	var parentDiv = this.createParentDiv(this.data.id);
	this.setQuestionTitle(this.data.title,parentDiv);
	this.createComboBox(parentDiv);
	this.domComponent = parentDiv;
}

ComboBox.prototype.createComboBox = function(parentDiv){
	var selectBox = document.createElement("SELECT");
	selectBox.id = "combobox-"+this.data.id;
	var temp = this;
	selectBox.onchange = function(){
		if(data.length == currentQuestion+1){
			document.getElementById("submit").disabled = false;
		}
		temp.selectedValue = this.value;
	}
	var options = this.data.options;
	for(var i=0;i<options.length;i++){
	  var option = document.createElement("option");
	  option.setAttribute("value", options[i]);
	  var text = document.createTextNode(options[i]);
	  option.appendChild(text);
	  selectBox.appendChild(option);
	}
	parentDiv.appendChild(selectBox);
}

ComboBox.prototype.getComponent = function(){
	return this.domComponent;
}
