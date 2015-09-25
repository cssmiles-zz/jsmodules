/// <reference path="typings/jquery/jquery.d.ts" />
export class Person
{
	fullname:String
	constructor(fname:String, lname:String){
		this.fullname = fname + " " + lname;
	}
	
	greet() 
	{
		
		return "Helloooo " + this.fullname;
	}
}



