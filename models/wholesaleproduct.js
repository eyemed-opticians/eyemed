const mongoose = require("mongoose");
const slugify = require("slugify");

const wholesaleproductSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    cloudinary_id : {
        type : String
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
    description : {
        type : String,
        required : true
    },
    quantity : {
        type : String
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

wholesaleproductSchema.pre("validate", function(next) {

    if (this.name) {
        this.slug = slugify(this.name, { lower : true, strict : true });
    }

    next()

});

module.exports = mongoose.model("wholesaleproduct", wholesaleproductSchema);