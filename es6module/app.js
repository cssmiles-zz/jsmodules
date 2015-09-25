import {Person} from 'module-es6-person';
var person = new Person("Front End ", "Engineers");
document.body.innerHTML = person.greet();