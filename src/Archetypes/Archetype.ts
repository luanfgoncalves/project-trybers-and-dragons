// ./src/Archetypes/Archetype.ts

import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name:string;
  private _special:number;
  private _cost:number;
  
  constructor(name:string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }
  
  get name():string {
    return this._name;
  }
    
  get special():number {
    return this._special;
  }
    
  get cost():number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented'); // Este erro deve permanecer conforme a aplicação avançar ?
  }

  abstract get energyType():EnergyType;
}

//   O atributo name dever ser do tipo string;
// O atributo special dever ser do tipo number;
// O atributo cost dever ser do tipo number;