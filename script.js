let btn = document.getElementById('enter')
let input = document.getElementById('userinput')
let ul =  document.querySelector('ul')
// let lists =document.querySelectorAll('li')
// var deletebtn = document.querySelectorAll('.mybtn')

function inputLenght(){
	return input.value.length
}

function createListElement(){
	var li = document.createElement('li')
	var list = document.createTextNode(input.value)
	li.appendChild(list)
	li.classList.add('bold')
	// creating delete button
	var delt = document.createElement('button')
	delt.appendChild(document.createTextNode('Delete!'))
	delt.classList.add('delbtn')
	li.appendChild(delt)  //appending delete button in list
	ul.appendChild(li)
	input.value =''	

}

// adding list after click
function addListAfterClick(){
	if(inputLenght() >0){
	createListElement()
	}
}

// Filling list after enter
function addListAfterKeyPress(event){
	if(inputLenght() >0 && event.which === 13){
	createListElement()	
	}
}

// adding toggle after click

function doneTask(task) {
	console.log(task.target.tagName)
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}


// Deletin a node
function deletenode(eve){
	var trash = document.querySelectorAll('.delbtn')
	// console.log(eve)
	for(let i =0; i<trash.length; i++){
			console.log(this, trash)
			this.parentNode.remove();
	}
}

function deleting(eve){
	for(let i =0; i<document.querySelectorAll('.delbtn').length; i++){
		document.querySelectorAll('.delbtn')[i].addEventListener('click',deletenode)

	}
}

function handle(e){
	deleting(e)
	doneTask(e)
}

	

btn.addEventListener('click', addListAfterClick)

input.addEventListener('keypress',addListAfterKeyPress)
ul.addEventListener('click',handle)
 