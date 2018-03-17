function isEven(n){
    if ( n == 1){return false}
    else if (n == 0 ){return true}
    else if (n<0) {return isEven(-1*n)}
    else{return isEven(n-2)};
}
console.log(isEven(75));


function isBigger(a,b){return Number(a) > Number(b)};
isBigger(1, 2);


function isSmaller(a,b){return !(Number(a) > Number(b))};
isSmaller(1,2);


function getMin(){ 
    let minArg = Number(arguments[0]);
    for (let i = 1; i < arguments.length; i++){
        minArg = minArg > Number(arguments[i])  ? Number(arguments[i]): minArg ;
    };
    return minArg
    };
getMin(7, 2, -4, 1, 0, -88, 5);


function isPrime(n){
    for (let i = 2; i <= n**.5; i++){
        if (n%i === 0) return false;
    return trawue    
    };
};
isPrime(3571);


function getClosestToZero(){
    let args = []
    for (let i = 0; i < arguments.length; i++) {args[i] = arguments[i]};
    let toPositive = args.map(num => Math.abs(num));
    return Math.min.apply(null, toPositive);
};
getClosestToZero(45, 5, -4);


function reverseNumber(n){
    return n<0 ? Number('-' + n.toString().split("").reverse().join("").replace('-','')): Number(n.toString().split("").reverse().join(""));
};
reverseNumber(54);