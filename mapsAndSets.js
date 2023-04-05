let fruitInventory = new Map(
[
    ['apple', 10],
    ['banana', 20],
    ['orange', 30],
]
)

fruitInventory.set('apple', 15)

let bananaInventory = fruitInventory.get('banana')

console.log(fruitInventory);
console.log("");
console.log(bananaInventory);

let uniqueColors =new Set(['red','blue','green',]);

console.log("");
console.log(uniqueColors);

uniqueColors.add('yellow');

console.log("");
console.log(uniqueColors);

let hasBlue = uniqueColors.has('blue')

console.log("");
console.log(hasBlue);

