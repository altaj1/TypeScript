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

    // getSleepingHours(person)
    // getSleepingHours(developer)
    // getSleepingHours(student)

    // ------------------------------------------

    class Cshap {
        getArea(): number{
            return 0;
        }
    }

    class Ccircle extends Cshap {
        radius: number;
        constructor (radius: number){
            super();
            this.radius = radius;
        }
        getArea():number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Creactangle extends Cshap {
        height : number;
        width: number;
        constructor(height: number, width: number){
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
    } 


    const getShapeArea = (param: Cshap): void=>{
        console.log(param.getArea())
    }
    const shap = new Cshap();
    const circle = new Ccircle(10);
    const reactangle = new Creactangle(10, 20);

    getShapeArea(circle)
}