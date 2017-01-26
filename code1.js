//obj example
var person = {
  name: "Lauren",
  generalAssemblySchool: true,

}

person.name;
person.generalAssemblySchool;

//keys are essentially strings

//create a dice roll function, then a dice object

function diceRoll() {
  var sides = 6; //sides
  var randonNumber = Math.floor(Math.randon() * sides) + 1; //randon number between 1 and sides
  console.log(randonNumber);
}
//obj lit: we want to incapsulate the function above into a method on the dice
//to keep all of the state and behavior in 1 place, easy to maintain
var dice = {
  roll: function() { //anonymous function
    var sides = 6; //sides
    var randonNumber = Math.floor(Math.randon() * sides) + 1; //randon number between 1 and sides
    console.log(randonNumber);
  }
}

//since the dice can have multiple sides it would be nice to have
//the number of sides as a property itself, right now its in the scope
//of the roll method

var dice = {
  sides: 6,
  roll: function() { //anonymous function
    var randonNumber = Math.floor(Math.randon() * sides) + 1; //randon number between 1 and sides
    console.log(randonNumber);
  }
}
//right now the js interpreter is looking for sides in the local scope "roll function"
//if it cant find it there it will look for it in the global scope
//sides is now a property on dice

//dice.sides should work
var dice = {
  sides: 6,
  roll: function() { //anonymous function
    var randonNumber = Math.floor(Math.randon() * dice.sides) + 1; //randon number between 1 and sides
    console.log(randonNumber);
  }
}

//this allows you to modify the property on sides
// as we introduce more complex objs we may need to change the name of objs
//if we renamed the dice obj, then we will need to modify code in the roll function

//THIS: we don't need to know the name of the var to access its properties
var dice = {
  sides: 6,
  roll: function() { //anonymous function
    var randonNumber = Math.floor(Math.randon() * this.sides) + 1; //randon number between 1 and sides
    console.log(randonNumber);
  }
}

//this is the owner of the function: the obj literal where the method is called

var dice10 = {
  sides: 10,
  roll: function() { //anonymous function
    var randonNumber = Math.floor(Math.randon() * this.sides) + 1; //randon number between 1 and sides
    console.log(randonNumber);
  }
}

//it allows us to have multiple objects with similar methods
