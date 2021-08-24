function stopWatch(){
    let count = 0;
    return function(){
        count ++ ;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
