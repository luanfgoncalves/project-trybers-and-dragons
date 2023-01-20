// ./src/interfaces/Fighter.ts

import Energy from '../Energy';

// type Fighter = 'mana' | 'stamina';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number; 
  energy?: Energy; // stamina ou mana
  attack(enemy:Fighter):void;
  special(enemy?:Fighter):void;
  levelUp():void;
  recieveDamage(attackPoints:number):number;
}

// export default Fighter;
