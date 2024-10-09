function func2(val){
console.log("=====",val)
if(val>0){
    val =val-1
    return func2(val)
}
return 'end'
}
const looping = func2(25)
console.log("-----",looping)

var val = 100
console.log(val)
 val =1000
 console.log(val)