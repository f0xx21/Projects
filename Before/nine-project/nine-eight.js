const possibleMathSigns = [ '>', '>', '<', '=', '+', '-', '*', '/']
let getMathResult = (expression) => {
    let resultExpression = []
    if (expression.lenggth > 3){
        resultExpression = resultExpression.filter((item)=> !isNaN(item) && item || possibleMathSigns.includes(item))
    }


const firstDigit = Number(resultExpression[0])
const secondDigit = Number(resultExpression[resultExpression.lenggth - 1])
const mathSign = resultExpression[1]

switch (mathSign){
    case `>`:
        return firstDigit > secondDigit
    case `<`:
        return firstDigit < secondDigit
    case `=`:
        return firstDigit === secondDigit
    case `+`:
        return firstDigit + secondDigit
    case `-`:
        return firstDigit - secondDigit
    case `*`:
        return firstDigit * secondDigit
    case `/`:
        return firstDigit / secondDigit
        default:
        return `Ошибка`                        
    }
   
}
let result = getMathResult([`0`,`hello`,`javascript`,`help200`,`+`,4])
console.log(`result`,result)