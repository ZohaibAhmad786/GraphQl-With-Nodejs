const products = [
    {
        id: "redshoe",
        description: "Red Shoe",
        price: 43.33,
        reviews: []
    },
    {
        id: "blueshoe",
        description: "Blue Shoe",
        price: 120.23,
        reviews: []
    }
]


function getAllProducts() {
    return products;
}

function getProductByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    });
}

function getProductById(id) {
    return products.find((product) => {
        return product.id === id;
    });
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    }

    products.push(newProduct);
    return newProduct
}
function addNewProductReview(id, rating, comment) {
    const matchProduct = getProductById(id)

    if (matchProduct) {
        const newProductReview = {
            rating,
            comment
        }
        matchProduct.reviews.push(newProductReview)
        return newProductReview
    } else {

    }
}


module.exports = {
    getAllProducts,
    getProductByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
}