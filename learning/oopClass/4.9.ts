{
    // ts-node-dev --respawn --transpile-only oopClass/4.9.ts
    // abstraction  : 1. interface 2. abstract
    interface Ivehicle1 {
        startEngine(): void;
        stopEngine():void;
        move(): void;
    }

    class Ccar1 implements Ivehicle1 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log("I am stopping the car engine");
        }

        move(): void {
            console.log(`I am moving the car`);
          }
          test() {
            console.log(`I am just testing`);
          }
    }
    const  toyotaCar = new Ccar1();
    // toyotaCar.startEngine();


  // abstract class

  abstract class Ccar2 {
   abstract startEngine():void;
   abstract stopEngine():void;
   abstract move():void;
   test(){
    console.log(`I am just testing`);
   }
  }
  class ToyotaCar extends Ccar2{
    startEngine(): void {
      console.log("this is start engine")
    }
    stopEngine(): void {
      console.log("this is stop engine")
    }
    move(): void {
      console.log("This is move engine")
    }
  }

  const amarCar = new ToyotaCar();
  console.log(amarCar.startEngine())
}