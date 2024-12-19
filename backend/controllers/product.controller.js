import {v2 as cloudinary} from "cloudinary";
import productModel from "../models/product.model.js";


// Function for add product
const addProduct = async(req, res) =>{

    try {
        
        const {name, description, price, category, subCategory, sizes, bestseller} = req.body;
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item)=>item !== undefined)

        let imagesUrl = await Promise.all(  // All images will be uplouded on cloudinary storage and we will  get the url, these url will be stored in imageUrl.
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resourse_type: 'image'});
                return result.secure_url
            })
        )

        console.log(name, description, price, category, subCategory, sizes, bestseller);
        console.log(imagesUrl);

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestseller: bestseller === 'true' ? true : false,
            sizes: JSON.parse(sizes), // In frontend we will send the sizes and that will be converted into string and (Here we are converting from string to array using JSON.parse)
            image: imagesUrl,
            date: Date.now()
        }
        console.log(productData);

        const product = new productModel(productData)
        await product.save();

        res.json({success: true, message: "Product Added Successfully!"})

    } catch (error) {
        console.log(error);
        
        res.json({success:false, message: error.message});
    }


}

// Function for List product
const listProducts = async() =>{


}

// Function for remove product
const removeProduct = async() =>{


}

// Function for add products
const singleProduct = async() =>{


}

export {
    listProducts,
    addProduct,
    removeProduct,
    singleProduct,
}