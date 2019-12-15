var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength () {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button")

	li.appendChild(document.createTextNode(input.value));
	deleteButton.appendChild(document.createTextNode("del"));
	deleteButton.className = "deleteButton";
	ul.appendChild(li);
	li.appendChild(deleteButton);

	input.value = ""
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterEnter() {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

function addClassDone() {
	if (event.srcElement.className === "done" 
		&& event.srcElement.tagName === "LI") {
		event.srcElement.className = "";
	} else if (event.srcElement.className === "" 
		&& event.srcElement.tagName === "LI") {
		event.srcElement.className = "done";
	}
}

function deleteListItem() {
	if (event.target.className === "deleteButton") {
		event.target.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

addEventListener("click", addClassDone);

addEventListener("click", deleteListItem)

addEventListener("click", function(event) {
	console.log(event);
})