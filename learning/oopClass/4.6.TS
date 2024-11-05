// ts-node-dev --respawn --transpile-only oopClass/4.6.ts
{
     // getter and setter
     class BankAccount {
        public readonly  id: number;
       public   name: string;
       private   _balance: number;
          constructor(id:number, name: string, balance: number){
              this.id= id;
              this.name = name;
              this._balance = balance
          }
          public set addDeposite (amount : number){
              this._balance = this._balance + amount
          }
        public get  getBalance(){
            return  this._balance
          }
      }
      const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);
      goribManusherAccount.addDeposite = 500;
      console.log(goribManusherAccount.getBalance)

}