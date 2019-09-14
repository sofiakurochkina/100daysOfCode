const numbers = [1200, 5, 10, 10000, 1500, 19000];

let maximum = numbers[0];

for (let x = 0; x < numbers.length; x++) {
  if (numbers[x] > maximum) {
    maximum = numbers[x];
  }
}

console.log(maximum);

let secondMax = numbers[0];

for (let x = 0; x < numbers.length; x++) {
  if (numbers[x] > secondMax && secondMax < maximum && numbers[x] != maximum) {
    secondMax = numbers[x];
  }
}

console.log(secondMax);
