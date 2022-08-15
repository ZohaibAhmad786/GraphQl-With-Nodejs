const productModel = require('./products.model')
module.exports = {
    Query: {
        // products: async (parent, args, context, info) => {
        //     console.log("Getting the products...");
        //     const products = await Promise.resolve(parent.products);
        //     return products;

        // },

        products: () => {
            return productModel.getAllProducts();
        },
        productsByPrice: (_, args) => {
            return productModel.getProductByPrice(args.min, args.max);
        },
        productsById: (_, args) => {
            return productModel.getProductById(args.id);
        }

    },
    Mutation: {
        addNewProduct: (_, args) => {
           return  productModel.addNewProduct(args.id, args.description, args.price)
        },
        addNewProductReview: (_, args) => {
            return  productModel.addNewProductReview(args.id, args.rating, args.comment)
        }
    }
}