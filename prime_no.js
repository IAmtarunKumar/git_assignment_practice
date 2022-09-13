let num = 13;
let prime = true;
    
    for(let x=2; x<num; x++){
        
        if(num % x == 1){
            
            prime = true;
        }
    }
    
    if(prime == true){
        console.log("Yes");
        
    }else{
        console.log("No");
    }