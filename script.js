function oddishOrEvenish(num) {
    let x = String(num);
    let joinNum = x.split("");
    let sum = 0;

    for(let i = 0; i < joinNum.length; i++) {
        sum += parseInt(joinNum[i]);
    }
    if(sum%2 == 0) {
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
   
}

oddishOrEvenish(4433)