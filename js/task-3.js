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

// const content = Npx;
// const padding = Npx;
// const border = Npx;
// let N = Number;


function getElementWidth(content, padding, border) {
   
   const total = content  + padding*2 + border*2;
  
 
    return `You ordered ${total} `


}
 
console.log (getElementWidth("50px", "8px", "4px"));

