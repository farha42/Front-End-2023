class bank {
constructor(name) {
this.name = name;
this.balance = 0;
}

credit(value) {

this.balance += value;
return this.balance;
}
describe() {
return `owner : ${this.name}, balance: ${this.balance}`;
}

}
const acct1 = new bank('may');
const acct2 = new bank('fan');
const acct3 = new bank('malk');
acct1.credit(1000)
acct2.credit(1000)
console.log(acct1.describe())
console.log(acct2.describe())
