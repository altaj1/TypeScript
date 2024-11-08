{
    // ts-node-dev --respawn --transpile-only oopClass/4.8.ts
    // polymorphisom

    class Person {
        getSleep () : void{
            console.log("I am Person sleeping for 8 hours per day")
        }
    }

    class Student extends Person {
        getSleep () : void{
            console.log("I am Student sleeping for 8 hours per day")
        }
    }

    class Developer extends Person {
        getSleep(): void {
            console.log("I am developer sleeping for 8 hours per day")
        }
    }

    const getSleepingHours = (param: Person) =>{
        param.getSleep()
    }

    const person = new Person();
    const student = new Student();
    const developer = new Developer();

    getSleepingHours(developer)
}