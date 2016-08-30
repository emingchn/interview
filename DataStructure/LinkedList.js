function animal() {

}

function people() {

}

people.prototype = new animal();
people.prototype.constructor = people;

var p = new people();

console.log(p instanceof people);
