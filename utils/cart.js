// Cart helper functions

// return cart or null
function getCart(req){
    if (req.session.cart == "undefined") {
        return null;
    } else {
        return req.session.cart;
    }
}

// find total price
function getTotalPrice(array){
    
    let total = 0;

    array.forEach(item => {
        total += item.price
    });

    return total;
}

// find quantity / number of unique items in cart
const find_qty = array => array.length;

// factors the setModel and setModel1 functions
function modelise(route) {
    if (route == 'wholesale') {
        Product = require('./../models/wholesaleproduct');
    } else if (route == 'retail') {
        Product = require('./../models/product');
    } else {
        console.log("can't tell what the route is");
    }
    console.log(`Using model for route : ${route}`);
}

// 
function setModel(req){
    // this function works to set the model when adding a new product
    // the route / model is stored in the querry
    console.log('Settitng model');
    modelise(req.query.route);
}

// 
function setModel1(req) {
    // this function works whe updating a product
    // the route / model is stored as a property of the product bieng updated
    const slug = req.params.product;
    const cart = req.session.cart;
    for (var i = 0; i < cart.products.length; i++) {
        if (cart.products[i].slug == slug) {
            modelise(cart.products[i].route);
        }
    }
}


module.exports = { getCart, getTotalPrice, find_qty, setModel, setModel1, modelise };