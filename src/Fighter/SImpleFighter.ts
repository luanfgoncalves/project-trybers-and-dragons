// ./src/interfaces/SimpleFighter.ts

import Energy from '../Energy';

export default interface SimpleFighter {
  lifePoints:number;
  strength:number;
  defense:number; 
  energy?:Energy; // stamina ou mana
  attack(enemy:SimpleFighter):void;
  receiveDamage(attackPoints:number):number;
}

// lifePoints, do tipo number;
// strength, do tipo number.
// A interface deverá possuir os métodos:
// attack() que recebe um enemy do tipo SimpleFighter como parâmetro e não possui retorno (void);
// receiveDamage() que recebe um attackPoints do tipo number como parâmetro e retorne um number;