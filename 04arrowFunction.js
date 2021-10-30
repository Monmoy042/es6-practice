function doubleIt(num) {
	return num * 2;
}

const doubleIt2 = function (num2) {
	return num2 * 2;
};

const result = doubleIt(5);
console.log(result);
const result2 = doubleIt2(10);
console.log(result2);

const square = (num3) => num3 * num3;
const result3 = square(5);
console.log(result3);

const add = (num4, num5) => num4 + num5;
const result4 = add(10, 40);
console.log(result4);

const doMath = (m, n) => {
	const sum = m + n;
	const diff = m - n;
	const result = sum * diff;
	return result;
};

const output = doMath(7, 5);
console.log(output);
