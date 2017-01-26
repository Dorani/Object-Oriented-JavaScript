function Contact(name, email) {
  this.name = name;
  this.email = email;
  this.sendEmail = function(){
    //do something//
  }
}

var contact = new Contact("andrew", "andrew@gmail.com");
var contact2 = new Contact("seif", "seif@gmail.com");
//this creates a contact with name and email
//we create a new instance = contact
 //a specific realization of a type or object

//2 seperate instances of a contact, each unique in terms of their own state
//we use "new" keyword, this turns a regular function call into a Constructor
//here, this, will mean a new instance of an object
//return is not required
