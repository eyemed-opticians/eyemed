//creare a bollean for wheather the order has been seen yet if not show the new in the orders view

const router = require("express").Router();

// const Order  = require("./../models/order");
// const specialOrder = require("../models/specialOrder");
// const { getCart } = require("../utils/cart");
// const createText = require("../utils/createText");
// const sendMail = require("../utils/mail");
// let Product = '';


router.get("/:route", (req, res) => {
    req.flash("error", `Sorry orders are disabled at the moment`);
    res.redirect("/");
});


module.exports = router;


// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// // set the model to use //
// function setModel(route) {
//     if (route == 'retail') {
//         Product = require("../models/product");
//     } else if (ruote = 'wholesale') {
//         Product = require("../models/wholesaleproduct");
//     }
// }


// ////////// test route /////////
// router.get("/", async (req, res) => {

//     try {

//         const text = await createText('611bed9a5b525703e0f2f2d9');

//         const cart = getCart(req);
//         if (cart != null) {
//             console.log("cart : ", cart);
//         } else {
//             console.log(`Can't create order because cart is empty`);
//         }

            
//         res.redirect('back');
//         // res.send(text);

//     } catch (e) {

//         console.log(e);
        
//         res.redirect('back');   
//         // res.send(text);

//     }

// });


// ////////////////////////////////
// router.post("/cart", async (req, res) => {

//     // get cart, create order, save order in the database, send order reciept to client.

//     const cart = getCart(req);
//     if (cart != null) {

//         // 
//         const order = new Order({
//             name : req.body.name,
//             phone : req.body.phone,
//             email : req.body.email,
//             cart : {
//                 totalQty: cart.qty,
//                 totalCost: cart.price,
//                 items: cart.products,
//             },
//         });

//         try {

//             var savedOrder = await order.save();
//             console.log('saved order : ', savedOrder);

//             // send emails
//             const emailHTML = await createText(savedOrder.id);

//             sendMail(savedOrder, emailHTML)
//                 .then (
//                     (result) => console.log("Email is sent...", result),
//                 )
//                 .catch((error)=> console.log(error.message))
//                 .finally (
//                     console.log("Clearing cart ..."),
//                     delete req.session.cart
//                 );

//             req.flash("success", `Your order has been sent!`);
//             res.redirect("back");
        
//         } catch (e) {
    
//           console.log(e);
//           req.flash("error", `Sorry there was a problem sending your order, please try again later`);
//           res.redirect("back");
    
//         }

//     } else {
//         req.flash("error", `Please add items to cart to place  an order!`);
//         console.log(`Can't create order because cart is empty`);
//         res.redirect("back");
//     }

// });


// //////////////////////////////////////////////////
// router.post("/specialorder", async (req, res) => {

//     // disable this route
//     req.flash("error", `sorry there was a problem sending your order, please try again later`);
//     res.redirect("back");

//     // get message, create order, save order in the database, send order reciept to client.


//     // 
//     const order = new specialOrder({
//         name : req.body.name,
//         phone : req.body.phone,
//         email : req.body.email,
//         message : req.body.message
//     });

//     try {

//         var savedOrder = await order.save();
//         console.log('saved order : ', savedOrder);

//         const customerName = req.body.name.split(" ")[0];

//         // send emails
//         const emailHTML = `<p>Hello ${customerName},<br/>Thank you for your order, we will get back to you soon.</p>`;

//         sendMail(savedOrder, emailHTML)
//             .then (
//                 (result) => console.log("Email is sent...", result),
//             )
//             .catch((error)=> console.log(error.message))

//         req.flash("success", `Your order has been sent!`);
//         res.redirect("back");
    
//     } catch (e) {

//       console.log(e);
//       req.flash("error", `sorry there was a problem sending your order, please try again later`);
//       res.redirect("back");

//     }

// });


// // exports
// module.exports = router;
