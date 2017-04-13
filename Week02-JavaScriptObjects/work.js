/*
 * Created by Andrew Wilson on 4/12/17.
 */

var person = {
    firstName: "Bob",
    lastName: "Dobbs",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

var calculator = {
    operator01: -1,
    operator02: -1,
    add: function(){
        return this.operator01 + this.operator02;
    },
    subtract: function(){
        return this.operator01 - this.operator02;
    }

};

function ruling(name) {
    console.log("------------------------------------");
    console.log(name);
    console.log("------------------------------------");
}



person.firstName = "Andrew";
person.lastName = "Wilson";

calculator.operator01 = person.firstName.length;
calculator.operator02 = person.lastName.length;

calculator.multiply = function (){
    return this.operator01 * this.operator02;
}

var op1 = "operator01 = " + calculator.operator01;
var op2 = "operator02 = " + calculator.operator02;
var add = "Add: " + calculator.add();
var subtract = "Subtract: " + calculator.subtract();
var multiply = "Multiply: " + calculator.multiply();

ruling("Person");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

ruling("Calculator");
console.log(op1);
console.log(op2);
console.log(add);
console.log(subtract);
console.log(multiply);



