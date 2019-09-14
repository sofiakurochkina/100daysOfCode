/** 
console.log(Math.max(3,6,7,8,9,49));
console.log(Math.min(9,5,8,9));
*/ 

var numbers=[1, 43, 4, 84];

let maximum = numbers[0];
for (let x=0; x<numbers.length; x++) {
    if (numbers[x] > maximum) {
        maximum=numbers[x]
    }
}
console.log (maximum);

