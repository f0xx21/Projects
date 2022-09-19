let numberType = 1; // number

console.log(String(numberType),Boolean(numberType),Number(numberType));

let stingType = '5' // string
console.log(String(stingType),Boolean(stingType),Number (stingType)); 

let booleanType = false; // boolean
console.log(String(booleanType),Boolean(booleanType),Number (booleanType)); 

let bigIntType = 100n; // bigint
console.log(String(bigIntType),Boolean(bigIntType),Number (bigIntType)); 

let objectType = { one: 1n, two: true, three: 'hello' } // object
console.log(String(objectType),Boolean(objectType),Number (objectType)); 

let nullType = null // null
console.log(String(nullType),Boolean(numberType),Number (numberType));

let undefType = undefined // undefined
console.log(String(undefType),Boolean(undefType),Number (undefType));

let sybmolType = Symbol('x') // sybmol
console.log(String(sybmolType),Boolean(sybmolType));