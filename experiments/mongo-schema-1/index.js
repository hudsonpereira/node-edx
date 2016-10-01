var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/anothertest');

var categorySchema = new mongoose.Schema({
  title: {type: String}
});

var productSchema = new mongoose.Schema({
  title: {type: String},
  category: categorySchema
});

var Product = mongoose.model('Product', productSchema);
var Category = mongoose.model('Category', categorySchema);

//Creates category
Category.create({title: 'Category 1'}, function(err, category){
  //Creates product
  Product.create({title: 'Product 1', category: category}, function(err, product) {
    //Modifies Category using Profuct Document
    product.category.title = 'Category number 1';
    product.save();
  });
});
