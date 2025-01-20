// class Rectangle {
//     constructor(width, height) {
//         this.width = width,
//         this.height = height
//     }
//     //methods
//     calcArea() {
//         let area = this.width * this.height
//         console.log(area)
//         return area
//     }
// }

const width = document.getElementById('width')
const height = document.getElementById('height')
const btn = document.getElementById('btn')

btn.addEventListener('click', calcArea())

// function to add width and height to the input field
function addWidthHeight (){
    const recWidth = parseFloat(width.value);
    const recHeight = parseFloat(height.value);

    // validate input
    if (isNaN(recWidth) || isNaN(recHeight) || recWidth <= 0 || recHeight <= 0) {
        alert('Please enter valid positive numbers for width and height.')
        return
    }
   
}
// let rectangle = new Rectangle(recWidth, recHeight)

// rectangle.calcArea()

// function to display area in the DOM