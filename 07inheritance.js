class Parent {
	constructor() {
		this.fatherName = 'Schwerzneger';
		this.motherName = 'Rachel';
	}
}
class Child extends Parent {
	constructor(name) {
		super();
		this.name = name;
	}
    getFullNmae(){
        return this.name +' ' +this.fatherName;
    }
}
const baby = new Child('Arnold');
const baby2 = new Child('Tom');
console.log(baby, baby2);
console.log(baby.getFullNmae());

// OOP Core Concepts
// 1. Inheritance
// 2. Encapsulation
// 3. Polymorphism

