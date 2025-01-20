class Rectangle {
    constructor(width, height) {
        this.width = width,
        this.height = height
    }
    //methods
    calcArea() {
        let area = this.width * this.height
        return `Area = ${area}`
    }
    calcPerimeter() {
        let perimeter = 2 * (this.width + this.height)
        return `Perimeter = ${perimeter}`
    }
}

const rec1 = new Rectangle(20,40)
console.log(rec1.calcArea())
console.log(rec1.calcPerimeter())