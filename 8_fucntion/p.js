const animal={
    makeSound(){
        console.log(`${this.name} makes a sound`)
    }
}

const dog=Object.create(animal)

dog.name="rohit",
dog.bark=()=>{
    console.log(`${this.name} barks`)
}

dog.makeSound();
dog.bark();