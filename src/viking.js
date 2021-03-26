// Soldier

// const player = {
//     health: 2,
//     strength: 100
// }


class Soldier {
    constructor (healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
        
    }
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }
}  

   

// Viking
class Viking extends Soldier {
    constructor (nameValue, healthValue, strengthValue){
     super (healthValue, strengthValue)
     this.name = nameValue
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`

        }  else {

            return `${this.name} has died in act of combat`
        } 
        
    }
   battleCry(){
       return "Odin Owns You All!"
   }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`

        }  else {

            return `A Saxon has died in combat`
        } 
        
    }
}

// War

class War {
    constructor (){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }


    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)

    }

    vikingAttack(){
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];


        const a = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0 ){
            console.log(randomSaxonIndex);
            this.saxonArmy.splice(randomSaxonIndex,1)
            console.log(this.saxonArmy.length);
        }
            return a
    }






    showStatus(){}

}
//const saxon = new Saxon() //instanciar un objeto a partir de una clase
