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
  roll: function diceRoll() {
    var sides = 6; //sides
    var randonNumber = Math.floor(Math.randon() * sides) + 1; //randon number between 1 and sides
    console.log(randonNumber);
  }
}
