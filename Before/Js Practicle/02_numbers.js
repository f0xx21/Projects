//number
// const num = 42 //integer
// const float = 42.55 // float
// const pow = 10e3
// console.log(num,float,pow)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2,53) -1)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log ('MIN_VALUE', Number.MIN_VALUE)
// console.log('MAX_VALUE',Number.MAX_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY',Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN)
// console.log(typeof NaN)
// const wired = 2 / undefined
// console.log(Number.isNaN(wired))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
//  console.log(parseInt(stringInt) + 2)
//  console.log(Number(stringInt) + 2)
//  console.log(+stringInt + 2)
//
// console.log(parseFloat(stringFloat) + 2)
//console.log(parseFloat(0.4 + 0.2).toFixed (2))

//BigInt
// console.log(90909090909090909090909n - 9898989899898989898n)
// console.log(-90909090909090909090909n)
// console.log(10n - BigInt( 4))
// console.log(5n / 2n )

//math
// console.log(Math.PI)
// console.log(Math.pow(5,3))
// console.log(Math.abs(-42))
// console.log(Math.max(42,22,33))
// console.log(min (42,22,33))

//example
function getRandomBetween(min,max){
    return Math.floor (Math.random() * (max - min) + min)
}

console.log(console.log(getRandomBetween(10, 42)));