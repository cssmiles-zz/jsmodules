var Person = require("person").Person; 
var objPerson = new Person("Front End ", "Engineers");
document.body.innerHTML = objPerson.greet();
