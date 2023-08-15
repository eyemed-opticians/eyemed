const mongoose = require("mongoose");
const slugify = require("slugify");


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    availability : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    cloudinary_id : {
        type : String
    },
    description : {
        type : String,
        required : true
    },
    slug : {
        type : String,
        required : true,
        unque : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

productSchema.pre("validate", function(next) {

    if (this.name) {
        this.slug = slugify(this.name, { lower : true, strict : true });
    }

    next()

});

module.exports = mongoose.model("Product", productSchema);