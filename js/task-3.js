console.log('task-3.js');
// getElementWidth(content, padding, border)

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// function multiply(x, y, z) {
//     console.log(`Result: ${x * y * z}`);

// function getElementWidth(content, padding, border) {
//     const getElementWidth = Number.parseFloat(content) + Number.parseFloat(padding) + Number.parseFloat(border);
//     Number.parseFloat()
// }





function getElementWidth (content, padding, border) {
    const contentWidth = Number.parseFloat(content);
    const paddingWidth = Number.parseFloat(padding);
    const borderWidth = Number.parseFloat(border);
    
    const elementWidth = contentWidth  + paddingWidth * 2 + borderWidth * 2 ;
    
 
    return `Your elements width is ${elementWidth}`


}




 
console.log (getElementWidth("50px", "8px", "4px")); // 120
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


