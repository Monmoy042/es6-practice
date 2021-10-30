const person = {
	name: 'Jack Willum',
	age: 17,
	job: 'facebooker',
	gfName: 'Ema Watson',
	address: 'Kochu khet',
	mobile: '01711256983',
	friends: ['Tom hanks', 'Tom Cruse', 'Tom Jerry'],
};
// console.log(person.gfName);

// const gfName = person.gfName;
// const phone = person.mobile;
// console.log(gfName,phone);
// console.log(gfName,phone);
// console.log(gfName,phone);
// console.log(gfName,phone);

const { mobile, gfName, salary } = person;
// console.log(mobile, gfName, salary);

const friends = ['Sakib Khan', 'Arman Khan', 'Zayed Khan', 'Shakil Khan'];
const [first, second, ...remainingFriends] = friends;
console.log(first, second, remainingFriends);

const complexObj = {
	name: 'abc',
	info: {
		address: 'kolabagan',
		leader: 'Tiger Leader',
	},
};
const { leader } = complexObj.info;
console.log(leader);
