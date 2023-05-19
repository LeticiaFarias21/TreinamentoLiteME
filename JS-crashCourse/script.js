console.log('teste');
const age = 18
const foo = age >= 18 ? 'maior' : 'menor'
console.log(foo);

switch(foo){
    case 'maior':
        console.log('e maior de idade');
        break;
    case 'menor':
        console.log('e maior de idade');
        break;
    default:
        console.log('a idade nao confere');
        
}

function addNums(num1, num2){
    console.log(num1 + num2);
    
}
addNums();

const adds5 = num1 => num1 + 5;

//todos.forEach((todo) => console.log(todo));

//Constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 

}
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

//class
class

//Intanciate object
const catanina = new Person('catarina', 'ramalho', '12-6-1989')

console.log(catanina)
console.log(catanina.firstName)
console.log(catanina.getBirthYear())
console.log(catanina.getFullName())

