class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  // Methode to get details
  getDetails() {
    return `
        Name: ${this.name}, 
        Age: ${this.age}, 
        Country: ${this.country}`;
  }
}

const person1 = new Person("Tobi", 10, "Nigeria");
const person2 = new Person("Olaoluwa", 12, "Ireland");
console.log(person1.getDetails());
console.log(person2.getDetails());
