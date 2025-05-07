const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Load environment variables

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Function to upload file to Cloudinary
const uploadFile = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "product-images" // Define folder for product images on Cloudinary
        });
        console.log(result); // Log the result (you can remove this in production)
        return result;
    } catch (error) {
        console.log("Error uploading file to Cloudinary", error);
        throw new Error("Cloudinary upload failed");
    }
};

module.exports = {
    uploadFile
};
