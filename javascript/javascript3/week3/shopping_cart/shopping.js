class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products.pop(product);
        //this.products.splice(products.indexOf(product));
    }

    getTotal() {
        this.products.sum(price)
    }

    renderProducts() {
        // Implement functionality here
    }

    getUser() {
        // Implement functionality here
    }
}

let flatscreen = new Product('flat-screen', 5000);
let shoppingCart = new ShoppingCart([flatscreen]);
 
// console.log(flatscreen);
// console.log(shoppingCart);

//to add a product
let computer = new Product('macbook',6000)
shoppingCart.addProduct(computer);

console.log(flatscreen);
console.log(shoppingCart);

//to remove a product
shoppingCart.removeProduct(computer);

console.log(flatscreen);
console.log(shoppingCart);

