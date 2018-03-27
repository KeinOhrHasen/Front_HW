let iterator = 0;

function delayFunc(callback, milSecDelay){
    window.setTimeout(callback, milSecDelay)
    iterator++;
    console.log('Iterator value:' + iterator);
};

delayFunc(function(){alert("I\'ll be back")}, 2000);
