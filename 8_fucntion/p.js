// const animal={
//     makeSound(){
//         console.log(`${this.name} makes a sound`)
//     }
// }

// const dog=Object.create(animal)

// dog.name="rohit",
// dog.bark=function(){
//     console.log(`${this.name} barks`)
// }

// dog.makeSound();
// dog.bark();


const animal={
    makeSound(){
        console.log(`${this.name} makes a sound`);
    }
}

const dog=Object.create(animal);

dog.name="Rohit";
dog.bark=function (){
    console.log(`${this.name} is still barking`)
}

