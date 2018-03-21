//input data
var arr = [5, 2, 3];



// #1
function forEach(someArray, someFunc){
    for (let i = 0; i < someArray.length; i++){
        someArray[i] = someFunc(someArray[i])
    }; 
    return someArray
};

function toSquare(arg){
    return arg*arg
};
forEach(arr, toSquare);



// #2
function getTransformedArray(someArray, someFunc){
    let transformedArray = forEach(someArray, someFunc);
    return transformedArray
};
getTransformedArray(arr, toSquare);



// #3
function myFilter(args) {return args%2 === 0};

function getFilteredArray(someArray, someFunc){
    let newArr = [];
    for (let i = 0; i < someArray.length; i++){
        if(someFunc(someArray[i]) === true){
            newArr.push(someArray[i]);
        };
    }; 
    return newArr
};
getFilteredArray(arr, myFilter);



//# 4
var movies = [
{
"id": 70111470,
"title": "Die Hard",
	"boxart": " http://bb-1/654356453",
"uri": " http://bb-1/654356453",
	"rating": 2.7,
	"bookmark": []
}, {
"id": 654356453,
"title": "Good Mood",
	"boxart": "http://bb-1",
	"uri": " http://bb-1/654356453",
	"rating": 3.5,
	"bookmark": [{time: 65876586}]
}, {
"id": 65432445,
	"title": "The Chamber",
	"boxart": "http://ch-1",
	"uri": " http://ch-1/65432445",
	"rating": 3.0,
	"bookmark": []
}, {
	"id": 675465,
    "title": "Fracture",
	"boxart": "http://fr-1",
	"uri": " http://fr-1/675465",
	"rating": 4.0,
	"bookmark": [{time: 65876586}]
}];


function collectIds(someArray){
    let newArr = [];
    for (let i = 0; i < someArray.length; i++){
        if (someArray[i]["rating"] > 3){
            newArr.push(someArray[i]["id"] );
        };
    }; 
    return newArr
};

collectIds(movies);



// #5
var charactersMap = {a: 'o', c: 'd', t: 'g'},
    kitty = 'kitty cat';

function cypherPhrase(someObj, someString){
    let newArr = [];
    let arr = someString.split('');
    for (let i = 0; i < arr.length; i++){
        let flag = true;
        
        for (var prop in someObj){
            if(arr[i] === prop.toString()){
                newArr.push(someObj[prop]);
                flag = false;
                break;
        };
    };
        
    if (flag){newArr.push(arr[i])}
    };
    return newArr.join('')
};
cypherPhrase(charactersMap, kitty);



// #6
function decypherPhrase(someObj, someString){
    //rewrite our charactersMap
    let newCharMap = new Object();
    for (var props in someObj){
        newCharMap[someObj[props]] = props;
    };
    alert(newCharMap.toString())
    return cypherPhrase(newCharMap, someString)
}
decypherPhrase(charactersMap, 'kiggy dog');
