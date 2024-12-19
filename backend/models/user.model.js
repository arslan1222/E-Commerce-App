import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
        default: {},
    },
}, {minimize:false}) // In cart data by default we have provided the value empty object

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel; // 5:50