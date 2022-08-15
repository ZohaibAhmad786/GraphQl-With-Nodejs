const orders= [
    {
        date: "2020-05-05",
        subtotal: 90.22,
        items: [
            {
                product: {
                    id: "redshoe",
                    description: "Old Red Shoes",
                    price: 45.11,
                },
                qutatity: 2
            },
        ]
    }
]

function getAllOrders() {
    return orders
}

module.exports = {
    getAllOrders,
}