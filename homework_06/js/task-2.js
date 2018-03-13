//input data
var userEuro = Number(prompt("Enter emount euro for convertation"));
var userDollar = Number(prompt("Enter emount dollars for convertation"));

//create constants
const UahToEuroValue = 31.892458;
const UahToDollarValue = 25.924612;
const ratioEU_Dol = (UahToEuroValue/UahToDollarValue).toFixed(3);

//convert curreccies
let UahFromEuro = userEuro*UahToEuroValue;
let UahFromDollar = userDollar*UahToDollarValue;

//responce
alert('For data ' + userEuro + ' ,' + userDollar + `:\n ${userEuro} euros are equal ${UahFromEuro} UAH, ${userDollar} dollars are equal ${UahFromDollar} UAH, one euro is equal ${ratioEU_Dol} dollars.`);