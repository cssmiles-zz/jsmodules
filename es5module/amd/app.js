define(["require", "person"], function (require, personModule) {
    var person = new personModule.Person("Front End ", "Engineers");
	document.body.innerHTML = person.greet();
});