import express from "express"
import { placeOrder, placeOrderStripe, placeOrderPayoneer, allOrders, userOrders, updateStatus } from '../controllers/order.controller.js'
import adminAuth from "../middelware/admin.auth.js"
import authUser from "../middelware/user.auth.js";


const orderRouter = express.Router();

// Admin features
orderRouter.post('/list',adminAuth, allOrders);
orderRouter.post('/status',adminAuth, updateStatus);

// Payment features
orderRouter.post('/place',authUser, placeOrder);
orderRouter.post('/stripe',authUser, placeOrderStripe);
orderRouter.post('/payneer',authUser, placeOrderPayoneer);


// User features
orderRouter.post('/userOrder', authUser, userOrders);

export default orderRouter;

