// Note: in the methods I used "return" instead of console.log so I won't always get "undefined' in my result
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber,
    this.balance = balance;
  }
  // Methods to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `
                Desosited: $${amount}
                To: ${this.accountNumber}
                Balance = $${this.balance}
            `;
    } else return "Deposited amount should be a postive amount.";
  }

  // Method to withdraw money
  withdraw(amount) {
    if ((amount = 0 && amount <= this.balance)) {
      this.balance -= amount;
      return `
              Withdrew: $${amount}
              From: ${this.accountNumber}
              Balance = $${this.balance}
      `;
    } else if (amount > this.balance) {
      return "Insufficient funds to withdraw";
    } else {
      return "Withdrawal amount must be a positive amount";
    }
  }

  //  Method to get balance
  getBalance() {
    return `
            Account Number: ${this.accountNumber}
            Balance: $${this.balance}
    `;
  }
}

// For the first account i have an initial balance of $500
// I then deposit $200 and withdraw $400. Finally, I get the account balance.
const firstAccount = new BankAccount("00123456789", 500);
console.log(firstAccount.deposit(200));
console.log(firstAccount.withdraw(100));
console.log(firstAccount.getBalance());