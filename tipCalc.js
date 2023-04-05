var bill = 12.95;
let tipRate = .2;

function calculateTip (x){
    return x * tipRate;
}



console.log("Your tip amount is $" + calculateTip(bill));

function getBillTotal(x){
   let total = (calculateTip(bill) + x).toFixed(2);
   return total;

}
console.log("");
console.log("You total bill is $" + getBillTotal(bill));
