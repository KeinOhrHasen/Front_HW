//get natural number from user
count = 0;

do{
    var mess = count == 0 ? "" : "Incorrect number ! \n";
    nmb = prompt(mess + "Enter natural number from 1 to 20");
    count +=1;
}
while ( /\D/.test(nmb) || nmb < 0 || nmb > 20 ) // must return true to work correct
    
let listMessage = ""; 
for (let i = 0;i<nmb;i++){
    listMessage += '     '.repeat(nmb-i) + '[~]'.repeat(2*i+1)+'\n';
}

alert(listMessage)