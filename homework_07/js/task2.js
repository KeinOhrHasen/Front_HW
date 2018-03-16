    let oneGameLoop = function(gameAttempt, prize, balance, max){

    do {
        //declare main mutable variables
        var randNmb = Math.floor(Math.random() * (max - 1)) + 1
            numberGueses = 0,
            res = false;

        
        // get value from user
        for (let i = 0; i<3;i++){

            let PossiblePrize = prize[numberGueses]*(gameAttempt+1);

            balanceAttemptMessage = `\nAttempts left: ${numberGueses}`+ 
                                    `\nTotal balance: ${balance} $` +
                                    `\nPossible prize on current attempt:`+
                                    `${PossiblePrize} $`;

            userAttempt = prompt(`Guess number from 1 to ${max-1} ` + 
                                balanceAttemptMessage, "");
            numberGueses +=1;

            if (Number(userAttempt) == randNmb){
                alert('Bellisimo !')
                res = true;
                break;
            };
        };
    
        
        // ask user does he want to continue and make next loop of the game
        gameAttempt += 1;
        if (res == true){
            let PossiblePrize = prize[0]*(gameAttempt+1);

            balance += gameAttempt*prize[numberGueses-1]

            var decisionToContinue = window.confirm(`Do you want to continue the game ?` +               `\n Attempts left: ${numberGueses}` +
                                    `\nTotal balance: ${balance} $` +
                                    `\nPossible prize on current attempt: ${PossiblePrize} $`);

            if (decisionToContinue == false){
                goodBye(balance);
                break;
            };
        }
        else{
            goodBye(balance);
            break;
        };
        
        
        //increase complicating of level
        max *= 2*gameAttempt;        
        }
        
    while(decisionToContinue == true)
    };
    
    
let playGame = function(){
    const prize = new Array(10, 5, 2);
    var gameAttempt = 0,
        balance = 0,
        max = 6;

    oneGameLoop(gameAttempt, prize, balance, max);
};

        
let goodBye = function(balance){
    return alert(`Thank you for a game. Your prize is:$ ${balance} `)
}


let main = function(){
    result = window.confirm("Do you want to play a game?");

    result == false ? alert("You did not become a millionaire"): playGame()   
};

        
main();