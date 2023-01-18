// ./src/Races/Halfling.ts

import Race from './Race';

export default class Halfling extends Race {
  static _createdRacesInstances = 0;
  private _maxLifePoints:number;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return Halfling._createdRacesInstances;
  }
}
