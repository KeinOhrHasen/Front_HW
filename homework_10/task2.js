'use strict';

function Fighter(name, attack, hp){
  this.name = name;
  this.attack = attack;
  this.hp = hp;
  
  this.wins = 0;
  this.loses = 0;

  
  this.getFighterName = function(){
    return this.name;
  };
  
  this.block = function(){
    return Math.random() > 0.5;
  };

  this.getFighterStatus = function(){
    return {name : this.name, attack : this.attack, hp : this.hp, };
  };

  this.getCombatHistory = function(){
    return {'wins' : this.wins, 'loses' : this.loses};
};
  this.fight = function(enemy){
    if (enemy.block() === true){
      this.loses +=1;
      enemy.wins += 1;
      return false;
    }else {
      enemy.hp -= this.attack;
      this.wins += 1;
      enemy.loses += 1;
      return true;
    }
      
  };
}

function showResult(fighterObj){
  let history = 'wins: ' + fighterObj.wins +', loses: '+ fighterObj.loses;
  let status = 'hp: '  + fighterObj.hp;
  console.log(`Fighter name: ${fighterObj.name}\nFighter status : ${history}\nFighter status: ${status}`);
}


// create all the fighter
var fighter1 = new Fighter('John', 100, 300);
var fighter2 = new Fighter('Leny', 100, 200);
var fighter3 = new Fighter('Danzel', 100, 400);
// test methods
console.log(fighter1.getFighterName());
console.log(fighter1.block());
console.log(fighter1.getFighterStatus());
console.log(fighter1.getCombatHistory());
// simullate the kombat
fighter1.fight(fighter2);
fighter1.fight(fighter3);
fighter1.fight(fighter3);
fighter1.fight(fighter2);
// to show the results
showResult(fighter2);
console.log(fighter1.getCombatHistory());
console.log(fighter2.getCombatHistory());
console.log(fighter3.getCombatHistory());
// to show statuses
console.log(fighter1.getFighterStatus());
console.log(fighter2.getFighterStatus());
console.log(fighter3.getFighterStatus());