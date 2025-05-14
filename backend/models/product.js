const mongoose = require('mongoose');

const ProductModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: {
            name: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,  // URL or path to the category image (thumbnail)
                required: false,  // Image is optional
            },
        },
        required: true,  // Category object is required
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
    },
    imageUrl: {
        type: String,  // Cloudinary URL or local path for product image
    },
    specs: {
        type: Object,  // Specs can be a complex object
    },
    sort: {
        type: String,
        default: '',  // Default to an empty string
    },
    sale: {
        type: Boolean,
        default: false,  // Sale is false by default
    },
    stock: {
        type: Number,
        default: 0,  // Stock is 0 by default
    },
    tags: {
        type: [String],  // Array of strings for tags
        default: [],  // Default to an empty array
    },
    SKU: {
        type: String,
        unique: true,  // Ensure SKU is unique
        required: true,  // SKU is required for each product
    },
    salePercent: {
        type: Number,
        default: 0,  // Sale percentage defaults to 0
    },
    createdAt: {
        type: Date,
        default: Date.now,  // Default to current timestamp
    },
    deal: {
        isDeal: { type: Boolean, default: false },
        dealName:{
            type: String, required: true
        },
        discountPercent: { type: Number, default: 0 }, // e.g., 10, 15
        couponCode: { type: String },                 // e.g., "WINTER23"
        isActive: { type: Boolean, default: false },
        expiry: { type: Date },
    }

})

const Product = mongoose.model("Product", ProductModel);
module.exports = Product