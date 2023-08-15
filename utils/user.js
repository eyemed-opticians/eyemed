const Customer = require("./../models/customer");

function exists(email){

    return customerExists = await Customer.exists({ email : email });

}

function updateOrCreate(customer, quotaion){

    if(exists(customer.email)){
        const oldCustomer = await Customer.find({ email : email });
        // update customer
        const data = {
            name : customer.name || oldCustomer.name,
            email : customer.email || oldCustomer.email,
            phone : customer.phone || oldCustomer.phone,
            products : []
        }
        //

        await oldCustomer.findByIdAndUpdate(oldCustomer.id);

    } else if (!exists(customer.email)) {
        // create user
        // add products to cart
    }

}