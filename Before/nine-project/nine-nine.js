let numbers = []

for (let i = 0; i < 3; i+= 1){
    const row = []
    for (let k = 0; k < 5; k += 1){
        row.push(k + 1)
    }
    numbers.push(row)
}

console.log(numbers)