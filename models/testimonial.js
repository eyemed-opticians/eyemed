const mongoose = require('mongoose');
const slugify = require('slugify');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  cloudinary_id : {
    type : String,
    required : true
  },
  position: {
    type: String
  },
  remarks: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

testimonialSchema.pre('validate', function(next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }

  next()
})

module.exports = mongoose.model('Testimonial', testimonialSchema);