const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const orderSchema = Schema({
  name : {
    type : String,
    required : true
  },
  phone : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  cart: {
    totalQty: {
        type: Number,
        default: 0,
        required: true,
    },
    totalCost: {
        type: Number,
        default: 0,
        required: true,
    },
    items: [
      {
        productId: {
          type : String,
        },
        title: {
          type : String
        },
        qty: {
          type : Number
        },
        slug: {
          type : String
        },
        price: {
          type : Number
        },
        subTotal: {
          type : Number
        },
        image: {
          type : String
        },
        route: {
          type : String
        }
      }
    ],
  },
  type : {
    type : String,
    required : true,
    default : "regular"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  delivered: {
    type: Boolean,
    default: false,
  },
  slug : {
    type : String,
    required : true,
    unique : true
  },
  seen : {
    type : Boolean,
    default : false
  }

});


orderSchema.pre('validate', function(next) {

  const num = Math.floor(Math.random() * 100000).toString();

  if (this.name) {

    this.slug = slugify((this.name + " " + num), { lower: true, strict: true })

  }

  next()
})


// exports
module.exports = mongoose.model("Order", orderSchema);