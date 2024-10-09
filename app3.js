function checkout(val){
    let message;
    let checkNum = 10;
    if(val>checkNum){
        message = val + 'is greater than' + checkNum
    }
    else if(val == checkNum) {
        message = val + 'is equal to' + checkNum
    }
    else{
        message = val + 'is less than' + checkNum
    }
    return message
}
let counter = 3;
console.log(checkout(counter))
counter++;
console.log(checkout(counter))
counter+= 8;
console.log(checkout(counter))
counter-= 2
console.log(checkout(counter))