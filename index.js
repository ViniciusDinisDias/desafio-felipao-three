// Código completo do Desafio

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.weapons = ["magia", "espada", "artes marciais", "shuriken"]
    }

    attack() {
        if(this.type === 'mago') {
            return `O ${this.name} atacou usando ${this.weapons[0]}`
        } else if (this.type === 'guerreiro') {
            return `O ${this.name} atacou usando ${this.weapons[1]}`
        } else if (this.type === 'monge') {
            return `O ${this.name} atacou usando ${this.weapons[2]}`
        } else {
            return `O ${this.name} atacou usando ${this.weapons[3]}`
        }
    
    }
}

// Instanciando Objeto

const warrior = new Hero('Ragnar', 25, 'guerreiro')
const ninja = new Hero('Naruto', 18, 'ninja')

// Saída

console.log(warrior.attack())
console.log(ninja.attack())