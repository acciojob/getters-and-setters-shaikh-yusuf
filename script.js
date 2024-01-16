//complete this code
class Person {
	constructor(name,age)
	{
		this.name1=name;
		this.age1=age
	}

	get name{
		return this.name1;
	}

    get age{
		return this.age1;
	}

}

class Student extends Person {
	constructor(name)
	{
		super(name)
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name)
	{
		super(name)
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
