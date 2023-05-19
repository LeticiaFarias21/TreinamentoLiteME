//console.dir(document); //examine

// console.log(document.URL);
// console.log(document.title);
// document.title = 'Domjs'
// console.log(document.head)

// create Element
var newDiv = document.createElement('div');

newDiv.className = 'hello';

newDiv.id = 'hello1';

newDiv.setAttribute('title', 'hello Div');

console.log(newDiv)
console.log(newDiv.textContent)
console.log(document.getElementsByClassName('hello'))

var newDivText = document.createTextNode('Hello World')
newDiv.appendChild(newDivText)

console.log(newDiv.textContent)
console.log(document.getElementsByClassName('hello'))