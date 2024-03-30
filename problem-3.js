/*
    Create a online store, define a object named "product" with the following properties : 
        - productName : (string)
        - productPrice : (number)
        - inStock : (boolean)
    
    create atleast three products using your object template and display their details.
*/

const productTemplate = {
    productName: "",
    productPrice: 0,
    inStock: false,
};

function createProduct(itemName, price, inStock) {
    return {
        ...productTemplate,
        productName: itemName,
        productPrice: price,
        inStock: inStock,
    };
}

const product1 = createProduct("Smartphone", 44999.99, true);
const product2 = createProduct("Laptop", 80999.99, false);
const product3 = createProduct("Desktop", 70999.99, true);

console.log("Product 1:");
console.log("Name: " + product1.productName);
console.log("Price: $" + product1.productPrice);
console.log("In Stock: " + (product1.inStock ? "Yes" : "No"));
console.log("\n");

console.log("Product 2:");
console.log("Name: " + product2.productName);
console.log("Price: $" + product2.productPrice);
console.log("In Stock: " + (product2.inStock ? "Yes" : "No"));
console.log("\n");

console.log("Product 3:");
console.log("Name: " + product3.productName);
console.log("Price: $" + product3.productPrice);
console.log("In Stock: " + (product3.inStock ? "Yes" : "No"));
console.log("\n");
 