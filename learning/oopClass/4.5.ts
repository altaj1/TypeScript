// ts-node-dev --respawn --transpile-only oopClass/4.5.ts
{
    // // access modifiers
    class BankAccount {
      public readonly  id: number;
     public   name: string;
     private   _balance: number;
        constructor(id:number, name: string, balance: number){
            this.id= id;
            this.name = name;
            this._balance = balance
        }
        public addDeposite (amount : number){
            this._balance = this._balance + amount
        }
      public  getBalance(){
          return  this._balance
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // goribManusherAccount._balance = 1000;
    goribManusherAccount.addDeposite(100)
    console.log(goribManusherAccount.getBalance())
}