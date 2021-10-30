// Class in ES6
class Student {
	constructor(sId, sName) {
		this.id = sId;
		this.name = sName;
		this.schoolName = 'MGBHS';
	}
}
const student1 = new Student(1, 'Monmoy');
const student2 = new Student(2, 'Saifullah');
console.log(student1, student2);
console.log(student1.name, student2.name);
