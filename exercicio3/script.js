//Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5,
    ataques: [
        {
            nome: "Investida",
            dano: 40,
            tipo: "Normal",
            precisao: 100

        },

        {
            nome: "Folha navalha",
            dano: 45,
            tipo: "Grama",
            precisao: 100
        }
    ]
};

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água",
    ataques: [
        {
            nome: "Jato de água",
            dano: 40,
            tipo: "água",
            precisao: 100
        }
    ]
};


/*b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`
```text
nome: Investida;
dano: 40;
tipo: Normal;
precisao: 100;
```*/
//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

//f) Imprima os dois objetos no console.*/

console.log(pokemon1 , pokemon2)

