// Spread Operator
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat(ages3);
// console.log(allAges);
// console.log(allAges.length);

// const allAges2 = [ages, ages2, ages3];
// console.log(allAges2);
const allAges2 = [...ages, ...ages2, ...ages3];
// console.log(allAges2);
// console.log(allAges.length);

const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
// console.log(maximum);
const takaPoisha = [650, 450, 250];
// const maximum = Math.max(takaPoisha);
const maximum = Math.max(...takaPoisha);
console.log(maximum);
