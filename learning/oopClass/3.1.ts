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
    // console.log(teacher1.takeClass(7))

    // typeof --> type guard

    type Alphaneumeric = string | number;
    const addFun = (param1 : Alphaneumeric, param2: Alphaneumeric): Alphaneumeric=>{
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }else{
            return param1.toString() + param2.toString();
        }
    }
    // const result1 = addFun("2", "3");
   
      // in guard

      type NormalUser = {
        name: string;
      }
      type AdminUser = {
        name: string;
        role: "admin"
      }

      const getUser =(user: NormalUser| AdminUser)=>{
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else {
            console.log(`My name is ${user.name}`);
          }
      }
      const normalUser :NormalUser = {
        name: "Al Taj"
      }
      const adminUser : AdminUser ={
        name: "Mr. Admin",
        role: "admin"
      }
// getUser(adminUser)

    // 
}