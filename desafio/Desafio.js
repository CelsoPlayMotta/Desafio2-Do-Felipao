class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
    }

    atacar(){

       console.log("o " +this.tipo,"atacou usando "+ataque)

       switch(this.tipo){
        case "guerreiro":
            ataque="usou espada";
            break;
        case "mago":
            ataque ="magia";
            break;
        case "monge":
            ataque="artes marciais";
            break;
        case "ninja":
            ataque ="usou shuriken";
            break;
       }
       

    }
}



let ataque="espada"



let ninja = new Heroi("celso", "29", "guerreiro");
let guerreiro = new Heroi("Carlos", "31","mago");





ninja.atacar();
guerreiro.atacar();