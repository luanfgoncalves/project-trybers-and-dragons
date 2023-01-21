// ./src/Charater.ts

import Energy from './Energy';
import Race from './Races';
import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import getRandomInt from './utils';
import Elf from './Races/Elf';

export default class Character implements Fighter {
//   private _name:string;
  private _race:Race;
  private _archetype:Archetype;
  private _maxLifePoints:number;
  private _lifePoints:number;
  private _strength:number;
  private _defense:number;
  private _dexterity:number;
  private _energy: Energy;

  constructor(name:string) {
    this._dexterity = getRandomInt(1, 10);
    // this._name = name;
    this._race = new Elf(name, this._dexterity); // por default deve ser Elf
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2; // por padrão deve sair da raça
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get dexterity():number {
    return this._dexterity;
  }

  get race():Race {
    return this._race;
  }

  get archetype():Archetype {
    return this._archetype;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  get strength():number {
    return this._strength;
  }

  get defense():number {
    return this._defense;
  }

  get energy():Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  // implementação de Fighter
  receiveDamage(attackPoints: number):number {
    const damage = attackPoints - this._defense;
    if (damage > 0) { 
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    } 

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy:Fighter):void {
    enemy.receiveDamage(this._strength);
  }

  levelUp():void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy?:Fighter):void {
    const lifePercent = this._maxLifePoints / this._lifePoints;
    enemy?.receiveDamage(lifePercent * enemy.lifePoints);
  }
}

// energy por padrão:
// type_ com o mesmo valor do arquétipo instanciado;
// amount com um valor aleatório de no mínimo 1 e no máximo 10 pontos. sparklessparkles