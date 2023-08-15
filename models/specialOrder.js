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
  message : {
    type : String,
    required : true
  },
  type : {
    type : String,
    required : true,
    default : "special"
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
module.exports = mongoose.model("specialOrder", orderSchema);