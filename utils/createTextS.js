// imports
const Order = require("./../models/special_order");
const createText_ = require("./createText_");
 
// create email text from html template
async function createText(orderId) {
    // use the order id to get the precise order
    const order = await Order.findById(orderId);
    // use in built template in this function to create text constant
    const text = createText_(order);
    // return text constant
    return text;
}

// exports
module.exports = createText;