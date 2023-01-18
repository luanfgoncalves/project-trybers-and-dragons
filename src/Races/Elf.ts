// ./src/Races/Elf.ts

import Race from './Race';

export default class Elf extends Race {
  static _createdRacesInstances = 0;
  private _maxLifePoints:number;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return Elf._createdRacesInstances;
  }
}
