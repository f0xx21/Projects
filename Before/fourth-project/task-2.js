//1 - неявное
console.log(+'50',typeof('50'));
//2 - явное           
console.log(Number('100',typeof Number('100'))); 
//3 - не явное
console.log('' + 1,typeof ('' + 1)); 
//4 - явное
console.log(String(1), typeof String(1)); 
//5 - явное
console.log(Boolean(0),typeof Boolean(0)); 
//6 - не явное
console.log(+'001',typeof +'001'); 
//7 не явное
console.log(1 + '',typeof 1 + ''); 
//8 - явное
console.log(Boolean(1),typeof Boolean(1)); 
//9 - явное
console.log(String(001),typeof String (001)); 
//10 - явное
console.log(Number('Hello World'),typeof Number('Hello World')); 