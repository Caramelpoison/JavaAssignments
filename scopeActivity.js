function outer(){
    let a = "Alex";

    let b = {
        name: "Alexia"
    };
    console.log(a)
    console.log(b)
    console.log("")
    
    function inner(a,b) {
        
        a = "Alexander"
        b.name = "Alexandra";
        console.log(a)
        console.log(b)
        console.log("")
        

    }
  
    inner(a,b);
    console.log(a)
    console.log(b)
    console.log("")

  }
  
  outer();