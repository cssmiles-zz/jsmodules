export class Person
{
	fullname:String
	constructor(fname:String, lname:String){
		this.fullname = fname + " " + lname;
	}
	
	greet() 
	{
		return "Hello " + this.fullname;
	}
}



