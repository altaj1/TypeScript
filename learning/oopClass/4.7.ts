{
    // ts-node-dev --respawn --transpile-only oopClass/4.7.ts
     // static
     class Counter {
       static count: number = 0;
    static increment (){
            return (Counter.count = Counter.count +1);

        }
     static   decrement(){
            return (Counter.count = Counter.count - 1);
        }
     }

     const instance1 = new Counter()
     const instance2 = new Counter()
    //  console.log(instance1.ncrement())
    //  console.log(instance2.ncrement())
    console.log(Counter.increment())
    console.log(Counter.increment()); 
    console.log(Counter.decrement()); 

}