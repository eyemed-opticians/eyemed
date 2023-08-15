const mongoose = require('mongoose');
const slugify = require("slugify");

const data_entrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  description : {
    type : String,
    required : true
  },
  slug : {
    type : String,
    required : true,
    unique : true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

data_entrySchema.pre('validate', function(next) {

if (this.name) {
  this.slug = slugify(this.name, { lower: true, strict: true })
}

next()
})

module.exports = mongoose.model('Data_entry', data_entrySchema);