
let num = 13;

let prime = true;
    
for(let x=2; x<num; x++){
    
    if(num % x == 0){
        
        prime = false
    }
}

if(prime == true){
    console.log("Yes");
    
}else{
    console.log("No");
}