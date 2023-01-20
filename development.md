<!-- Este arquivo conterá informações auxiliares ao desenvolvimento -->

<h3>Entrega e Requsitos:</h3>

Entrega Regular: 26/01/23
Entrega em Recuperação: ??/02/23

Requisitos Obrigatórios: 1-10
Requisitos Bonus: 11-13

Aprovação: 8 Requsitos
Aprovação em recuperação: 12 Requisitos

<h3>Testando a aplicação:</h3>

describe.skip('...', () => {})

É possivel testar cada requsito individualmente com:
npm test -nome do requisito-

npm test 01 - Race.test
npm test 02 - Races.test
npm test 03 - Energy.test
npm test 04 - Archetype.test
npm test 05 - Archetypes.test
npm test 06 - Fighter.test
npm test 07 - Character.test
npm test 08 - SimpleFighter.test
npm test 09 - Monster.test
npm test 10 - PVP.test
npm test 11 - PVE.test
npm test 12 - Dragon.test
npm test 13 - Index.test

<h3>Anotações</h3>

* <b>Classe abstrata:</b> É um tipo de classe especial que não pode ser instanciada, apenas herdada.
* <b>Atributos “private”:</b> São atributos acessíveis apenas para a própria classe, devem ser identificados com "_". Ex: "private _cost:number;"