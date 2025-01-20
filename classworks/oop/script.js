// using class constructor

class Shirt{
    constructor(brandName, size, color) {
        this.brandName = brandName,
        this.size = size,
        this.color = color
    }
}

const teniwears = new Shirt("teniwears", "XL", "White");
const jnBrand = new Shirt("jn", "S", "Pink");
console.log(teniwears)
console.log(jnBrand)