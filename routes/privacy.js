// export the privacy route
const router = require("express").Router();
//
const get_data                = require("../utils/data");
const { getCart }             = require("../utils/cart");

router.get("/", async (req, res) => {
    res.render("privacy-policy", {
        pageName : "Privacy Policy",
        cart : getCart(req),
        data : await get_data()
    });
});

module.exports = router;