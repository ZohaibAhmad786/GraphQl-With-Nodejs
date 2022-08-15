const orderModel = require('./orders.model')
module.exports = {
    Query: {
        // orders: (parent, args, context, info) => {
        //     console.log("Getting the orders...");
        //     return parent.orders;
        // }
        orders: () => {
            return orderModel.getAllOrders();
        }
    }
}