let str = "nurpul";
let N=6;

let store1 = '';
    let store2 = '';
    
    for(let x=0; x<str.length; x++){
        store1 = store1 + str[x]
    }
    for(let y=N-1; y>=0; y--){
        store2 = store2 + str[x]
    }
    
    if(store1 == store2){
        console.log('no');
        
    }else{
        console.log('No');
    }