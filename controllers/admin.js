const Products = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Products(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Products.fetchAll(products => {
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin Product',
          path: '/admin/products'
        }); 
      });
}