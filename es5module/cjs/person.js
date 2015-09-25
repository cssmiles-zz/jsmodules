var Person = (function () {
    function Person(fname, lname) {
        this.fullname = fname + " " + lname;
    }
    Person.prototype.greet = function () {
        return "Hello " + this.fullname;
    };
    return Person;
})();
exports.Person = Person;
