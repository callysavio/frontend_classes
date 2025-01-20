// using class constructor

class Shirt{
    constructor(brandName, size, color) {
        this.brandName = brandName,
        this.size = size,
        this.color = color
    }
    //methods 
    //that is methods involved for the Shirt
    wash() {
        console.log("===> becomes neat")
        return this
    }
}

const teniwears = new Shirt("teniwears", "XL", "White");
const jnBrand = new Shirt("jn", "S", "Pink");
console.log(teniwears.wash())
console.log(jnBrand)

class Rectangle {
    constructor(width, height) {
        this.width = width,
        this.height = height
    }
    //methods
    calcArea() {
        let area = this.width * this.height
        console.log(area)
        return area
    }
}

const rec1 = new Rectangle(20,40)
console.log(rec1.calcArea())