// ./src/Archetypes/Ranger.ts

import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  static _createdArchetypesInstances = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    Ranger._createdArchetypesInstances += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType { // nota: deve ser minusculo pois faz referencia a var local
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Ranger._createdArchetypesInstances;
  }
}
