var data = [{id:'Q-101', title:'What is India\'s capital', type:'radiogroup', options:['Delhi','Mumbai','Kolkatta','Pune']},
			{id:'Q-103', title:"Grand Central Terminal, Park Avenue, New York is the world's", type:'radiogroup', options:['largest railway station','highest railway station','longest railway station','None of the above']},
	{id:'Q-104', title:'Entomology is the science that studies', type:'dropdown', options:['Behavior of human beings','Insects','The origin and history of technical and scientific terms','The formation of rocks']}];


var questions = [];
for(var i = 0 ;i<data.length;i++){
	var questionComponent;
	if(data[i].type == "radiogroup"){
		questionComponent = new RadioGroup(data[i]);
	}
	else if(data[i].type == "dropdown"){
		questionComponent = new ComboBox(data[i]);
	}
	questionComponent.createComponent();
	
	questions.push(questionComponent);
}
document.getElementById("questionDiv").appendChild(questions[0].getComponent());
document.getElementById("attemptQuestion").innerHTML = "Selected " + 1 + " of " + data.length;
var currentQuestion = 0;
function prev(){
	if(currentQuestion >= 0){
		currentQuestion--;
	}
	document.getElementById("attemptQuestion").innerHTML = "Selected " + (currentQuestion+1) + " of " + data.length;
	if(currentQuestion == 0 ){
	document.getElementById("prev").disabled = true;
	}
	if(currentQuestion == questions.length-1){
		
		document.getElementById("submit").style.display = "block";
		document.getElementById("next").style.display = "none";
	}
	else{
	document.getElementById("submit").style.display = "none";
		document.getElementById("next").style.display = "block";
	}
	showDemandedQuestion();
}

function next(ele){

	if(!questions[currentQuestion].selectedValue){
		alert("Please select your answer");
		return;
	}
	
	currentQuestion++;
	document.getElementById("attemptQuestion").innerHTML = "Selected "+ (currentQuestion+1) + " of " + data.length;
	if(currentQuestion>0){
		document.getElementById("prev").disabled = false;
	}
	document.getElementById("prev").style.display = "block";
	if(currentQuestion >= questions.length-1){
		ele.style.display = "none";
		document.getElementById("submit").style.display = "block";
	}
	showDemandedQuestion();
	
}

function showDemandedQuestion(){
	for(var i=0;i<questions.length;i++){
	var ele = document.getElementById(questions[i].getComponent().id);
	if(ele)
		document.getElementById("questionDiv").removeChild(ele);
	}
	document.getElementById("questionDiv").appendChild(questions[currentQuestion].getComponent());
}

function submit(){
	if(!questions[currentQuestion].selectedValue){
		alert("Please select your answer");
	return;
	}
	document.body.innerHTML ="Thank You";
}
