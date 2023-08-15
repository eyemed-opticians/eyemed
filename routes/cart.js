const express = require('express');
const router = express.Router();

// Get Product model
const cart_getRouter = require("./get_routes/cart");
const { getCart, getTotalPrice, find_qty } = require("./../utils/cart");
let Product = '';

// use cart get router to get routes
router.use("", cart_getRouter);


// model setting functions
//////////////////////////////////////////////
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



/////////////////////////////////////////////////
router.get('/add/:product', function (req, res) {

    setModel(req);

    const slug = req.params.product;

    Product.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.cart == "undefined") {

            req.session.cart = {
                products : [],
                qty : 0,
                price : 0,
            };

            req.session.cart.products.push({
                productId : p.id,
                title: p.name,
                qty: 1,
                slug: p.slug,
                price: p.price,
                subTotal: p.price,
                image: p.image,
                route: req.query.route
            });

            req.session.cart.qty = find_qty(req.session.cart.products);
            req.session.cart.price += p.price;

        } else {

            const cart = req.session.cart;
            var newItem = true;

            for (var i = 0; i < cart.products.length; i++) {
                if (cart.products[i].slug == slug) {
                    cart.products[i].qty++;
                    cart.products[i].subTotal += cart.products[i].price;
                    newItem = false;
                    cart.price += cart.products[i].price;
                    cart.qty += 1
                    break;
                }
            }

            if (newItem) {
                cart.products.push({
                    productId : p.id,
                    title: p.name,
                    qty: 1,
                    slug: p.slug,
                    price: p.price,
                    subTotal: p.price,
                    image: p.image,
                    route: req.query.route
                });
                cart.price += cart.products[i].price;
                cart.qty += 1
            }
        }

        req.session.save((err) => {
            if (err) {
                console.log(err);
            }
        });

        res.redirect('/cart');

    });

});


/////////////////////////////////////////////
router.get('/checkout', function (req, res) {

    const cart = req.session.cart;

    if (req.session.cart && req.session.cart.length == 0) {
        delete req.session.cart;
        res.redirect('/cart/checkout');
    } else {
        res.render('checkout', {
            title: 'Checkout',
            cart: cart
        });
    }

});


////////////////////////////////////////////////////
router.get('/update/:product', function (req, res) {

    setModel1(req);

    const slug = req.params.product;
    let cart = req.session.cart;
    const action = req.query.action;

    for (var i = 0; i < cart.products.length; i++) {
        if (cart.products[i].slug == slug) {
            switch (action) {
                case "add":
                    console.log("route : ", req.query);
                    //  increase the qty of the product and the carts
                    cart.qty++
                    cart.products[i].qty++;
                    // increase the product subtotal and cart price by product price
                    cart.price += cart.products[i].price;
                    cart.products[i].subTotal += cart.products[i].price;
                    break;
                case "remove":
                    // reduce product qty and cart total qty
                    cart.products[i].qty--;
                    cart.qty--
                    // reduce product subtotal and cart price
                    cart.price -= cart.products[i].price;
                    cart.products[i].subTotal -= cart.products[i].price;
                    // remove product from cart if there are no more such product in the cart
                    if (cart.products[i].qty < 1) {
                        cart.products.splice(i, 1);
                    }
                    // delete cart if the products array is empty
                    if (cart.products.length < 1) {
                        delete req.session.cart;
                    }
                    break;
                case "clear":
                    // reduce cart qty by one and reduce total price by the price of the product removed
                    cart.qty--;
                    req.session.cart.price -= cart.products[i].subTotal;
                    // remove product from cart array
                    cart.products.splice(i, 1);
                    // delete cart if products legnth is less than 1
                    if (cart.products.length < 1) {
                        delete req.session.cart;
                    }
                    break;
                default:
                    console.log('update problem');
                    break;
            }
            break;
        }
    }
    
    req.session.save((err) => {
        if (err) {
            console.log(err);
        } 
    });

    // req.flash('success', 'Cart updated!');
    res.redirect('back');

});


//////////////////////////////////////////
router.get('/clear', function (req, res) {

    delete req.session.cart;
    
    req.flash('success', 'Cart cleared!');
    res.redirect('/cart/checkout');

});


///////////////////////////////////////////
router.get('/buynow', function (req, res) {

    delete req.session.cart;
    
    res.sendStatus(200);

});


// Exports
module.exports = router;


