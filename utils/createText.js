// imports
const Order = require("./../models/order");
const createProductsTable = require("./createProductsTable");
const createText_ = require("./createText_");
 
// create email text from html template
async function createText(orderId) {
    // use the order id to get the precise order
    const order = await Order.findById(orderId);
    // const order = await Order.findById('611bc1b41a3df631005d161f');
    // console.log("order : ", order);
    // use a loop to create productsTable constant containing all products in the products array
    const productsTable = createProductsTable(order);
    // use in built template in this function to create text constant
    const text = createText_(productsTable, order);
    // return text constant
    return text;
}

// exports
module.exports = createText;