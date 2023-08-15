const mongoose        = require('mongoose');
const slugify         = require('slugify');
 
const articleSchema = new mongoose.Schema({
  
  title : {
    type : String,
    required : true
  },
  image : {
    type : String,
    required : true
  },
  cloudinary_id : {
    type : String,
    required : true
  },
  topic : {
    type : String,
    required : true
  },
  description : {
    type : String
  },
  markdown : {
    type : String,
    required : true
  },
  createdAt : {
    type : String,
  },
  slug : {
    type : String,
    required : true,
    unique : true
  },
  sanitizedHtml : {
    type : String,
    required : true
  }

})

articleSchema.pre('validate', function(next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  next()
})

module.exports = mongoose.model('Article', articleSchema)