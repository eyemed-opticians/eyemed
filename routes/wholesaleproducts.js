const router            = require("express").Router();
// const Wholesaleproduct  = require("./../models/wholesaleproduct")
const get_data          = require("../utils/data");
const { getCart }       = require("../utils/cart");

router.get("/", (req, res) => {
    res.redirect("/"); // disable website trasnfer
    // res.redirect("https://suppliers.eyemedopticians.com");
});

router.get("/:route", (req, res) => {
    res.redirect("/"); // diable website transfer
    // res.redirect("https://suppliers.eyemedopticians.com");
});

// router.get("/", async (req, res) => {

//     const cart = getCart(req);
//     // console.log("Cart : ", cart);

//     const products = await Wholesaleproduct.find().sort({ createdAt : "desc" });
//     const data = await get_data();

//     res.render("suppliers", 
//         {
//             pageName : "Eyemed Optical Supplers - Wholesale",
//             products : products,
//             data : data,
//             cart : cart
//         }
//     );

// });

// router.get("/:slug", async (req, res) => {

//     const cart = getCart(req);
//     const product = await Wholesaleproduct.findOne({ slug : req.params.slug });
//     const data = await get_data();

//     res.render("product-details",
//         {
//             pageName : `Eyemed Optical Supplers - Wholesale - ${product.name}`,
//             product : product,
//             data : data,
//             cart : cart
//         }
//     );

// });

module.exports = router;