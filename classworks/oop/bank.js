class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber,
    this.balance = balance
  }
  // Methods to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`
                Desosited ${amount}
                To ${this.accountNumber}
                Balance = ${this.balance}
            `);
    } else console.log("Deposited amount should be a postive amount.");
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount = 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`
                        Withdrew ${amount}
                        From ${this.accountNumber}
                        Balance = ${this.balance}
                `);
    } else if (amount > this.balance) {
      console.log("Insufficient funds to withdraw");
    } else {
      console.log("Withdrawal amount must be a postive amount");
    }
  }

    //  Method to get balance
    getBalance(){
        console.log(`
            Account Number: ${this.accountNumber}
            Balance: $${this.balance}
        `)
    }
}

const firstAccount = new BankAccount ("00123456789", 500);
console.log(firstAccount.deposit(200))
console.log(firstAccount.withdraw(600))
console.log(firstAccount.getBalance());
