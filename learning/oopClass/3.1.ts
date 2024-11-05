// ts-node-dev --respawn --transpile-only oopClass/3.1.ts
{
    // 
    class Animal {
        constructor(
            public name:string,
            public species: string,
            public sound: string
        ){}
        makeSound (){
            console.log(`the ${this.name} says ${this.sound}`)
        }
    }
    const dog = new Animal("German shepard", "dog", "Ghew Ghew");
    const cat = new Animal("citi", "cat", "miw miw")
    // console.log(cat.makeSound())

 // oop - inheritence
    class Person {
        name: string;
        age:number;
        address:string;
        constructor(name:string, age:number, address:string){
            this.name=name;
            this.age=age;
            this.address=address
        }
        getSleep (numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }


    class Student extends Person{
        constructor(name: string, age:number, addres:string){
            super(name, age, addres)
        }
    }

    class Teacher extends Person {
        desiganation:string
        constructor(name:string, age:number, address: string, designation: string){
            super(name, age, address)
            this.desiganation = designation
        }
        takeClass(numofClass:number){
            console.log(`${this.name} will take ${numofClass}`)
        }
    }

    const student1 = new Student("Mr. student", 20, "Uganda");
    const teacher1 = new Teacher("Mr. teacher", 40, "Uganda", "proffessor");
    console.log(teacher1.takeClass(7))
    // 
}