const router   = require("express").Router();
const get_data = require("../../utils/data");
const { getCart }  = require("../../utils/cart");


router.get("/", async (req, res) => {
    
    const cart = getCart(req);
    const data = await get_data();

    res.render("cart",
        {
            pageName : "Cart",
            data : data,
            cart : cart,
            success: req.flash("success"),
            error: req.flash("error")
        }
    );

});

router.get("/clear-session", (req, res) => {
    delete req.session.cart;
    console.log("Cleared session cart");
    res.redirect("/cart");
});

module.exports = router;