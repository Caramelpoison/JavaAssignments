let i = 0;


function xPonential (x,y){
    let z = x;
    while (i < y){
        z = z * x;
        i = i + 1;
        console.log(z)
    }
}

let z = 1;
function xRecursive (x, y){
    z = x * z 
    console.log(z) 

    if (y >= 0){
       xRecursive(x,y-1)
    }

}

  
xPonential(2,5)
console.log("")
xRecursive(2,5)



