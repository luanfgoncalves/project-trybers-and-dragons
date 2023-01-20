// ./src/interfaces/Energy.ts

type EnergyType = 'mana' | 'stamina'; // delimita o type da interface

interface Energy {
  amount: number; // quantidade de stamina ou mana que cada criatura pode ter
  type_: EnergyType; // stamina ou mana
}

export default Energy;
export { EnergyType };
