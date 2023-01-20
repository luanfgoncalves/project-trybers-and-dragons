// ./src/Archetypes/Mage.ts

import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  static _createdArchetypesInstances = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    Mage._createdArchetypesInstances += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType { // nota: deve ser minusculo pois faz referencia a var local
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Mage._createdArchetypesInstances;
  }
}
