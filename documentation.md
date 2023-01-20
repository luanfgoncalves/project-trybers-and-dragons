<!-- Este arquivo conterá a documentação referente ao projeto -->

<h3>Funcionalidades:</h3>

<h4>Races:</h4>

Este a classe <b>Races</b> engloba todas as raças do jogo e suas propriedades universais: <b>Nome</b> e <b>Destreza</b>.
As caracteristicas individuais de cada raça são definidas conforme sua propria classe dentro de seus respectivos arquivos: <i>.src/Races/ ... Dwarf, Elf, Halfling</i> e <i>Orc.ts</i>.
Cada personagem também possui <b>Stamina</b> e <b>Mana</b>, com a interface delimitada em <i>Energy.ts</i>
Cada Raça possui os seguintes atributos:

# <h5>Dwarf:</h5>
_maxLifePoints = 80;

# <h5>Elf:</h5>
_maxLifePoints = 99;

# <h5>Halfling:</h5>
_maxLifePoints = 60;

# <h5>Orc:</h5>
_maxLifePoints = 74;

Os personagens tem habilidades que são delimitadas conforme seus respectivos arquetipos, esses são delimitados em <i>./src/Archetypes</i>, tendo os seguintes atributos:
* <b>name:</b> Nome do ataque especial do arquetipo.
* <b>special:</b> Potência do ataque especial.
* <b>cost:</b> Custo energético do ataque.