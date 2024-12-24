import orderModel from "../models/order.model.js";
import userModel from "../models/user.model.js";


// Placing order using COD method (Cash on delivery methods)
const placeOrder = async(req, res) => {

    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            Date: Date.now(),

        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData: {}});

        res.json({success: true, message: "Order Placed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}

// Placing order using stripe
const placeOrderStripe = async(req, res) => {

}

// Placing order using stripe
const placeOrderPayoneer = async(req, res) => {

}

// All admin data for admin panel

const allOrders = ()=>{

}

// User orders for forward
const userOrders = async()=>{

}

// update order status from admin panel
const updateStatus = async()=>{

}

export {
    placeOrder, placeOrderStripe, placeOrderPayoneer, allOrders, userOrders, updateStatus
}