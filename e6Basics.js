let number1 = [1,2,3,4]
let number2 = [5,6,7,8]
let numbers = [...number1, ...number2]

const square = (x) =>{
    y= x * x;
    return y
}

let Cocomelon = numbers.map(square)


const isEven =(x) =>{
    y = x % 2 
    if (y === 0 ){
        return true 
    }
    else {
        return false 
    }
}

evenSquares = Cocomelon.filter(isEven)
            

let firstEvenSquare = evenSquares[1]
let secondEvenSquare =evenSquares[2]


console.log(`numbers: ${numbers} squares: ${Cocomelon} evenSquares: ${evenSquares} firstEvenSquare: ${firstEvenSquare} secondEvenSquare: ${secondEvenSquare}`)