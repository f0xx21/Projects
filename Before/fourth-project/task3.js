// 1  - 12345
console.log(Number(' 1 2 3 4 5'));  // NaN
// 2 - 12345
console.log(Number('1234 5')); // NaN
// 3 - 12345
console.log(Number('12345')); // 12345
// 4 - false
console.log(String(false)); // false
// 5 - true
console.log(Boolean(0000000)); // false
// 6 - true
console.log(Boolean(0.0000001)); // true
// 7 - undefined
console.log(String(undefined)); // undefined
// 8 - 100
console.log(Number('100f')); // NaN
// 9 - 100
console.log(Number('100')); // 100
// 10 - 000001
console.log(Number('000001')); // 1