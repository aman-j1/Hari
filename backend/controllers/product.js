const ProductModel = require('../models/product');
const { uploadFile } = require('../helpers/upload'); // Importing the uploadFile helper function
const fs = require('fs').promises;


exports.addProduct = async (req, res) => {
    try {
        const {
            title, tags, categoryName, price, SKU,
            description, brand, specs, sort, sale, stock, salePercent,
            deal
        } = req.body;

        if (!title || !tags || !SKU) {
            return res.status(400).send({
                status: false,
                message: "Please provide all required fields: title, tags, and SKU"
            });
        }

        const existing = await ProductModel.findOne({ title });
        if (existing) {
            return res.status(400).send({
                status: false,
                message: "Product already exists"
            });
        }

        if (!req.file) {
            return res.status(400).send({
                status: false,
                message: "Product image is required"
            });
        }

        // Upload image
        const uploadResult = await uploadFile(req.file.path);
        await fs.unlink(req.file.path); // cleanup

        // Normalize categoryName
        const normalizedName = (categoryName || 'Others').trim();
        const capitalizedName = normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1).toLowerCase();

        // DEBUG

        const newProduct = new ProductModel({
            title,
            tags,
            category: {
                name: capitalizedName
            },
            imageUrl: uploadResult.secure_url,
            price,
            SKU,
            description,
            brand,
            specs,
            sort,
            sale,
            stock: stock ? parseInt(stock) : 0,
            salePercent: salePercent ? parseFloat(salePercent) : 0,
            deal: {
                isDeal: deal?.isDeal || false,
                discountPercent: deal?.discountPercent || 0,
                couponCode: deal?.couponCode || '',
                isActive: deal?.isActive || false,
                expiry: deal?.expiry ? new Date(deal.expiry) : null
            }
        });

        const saved = await newProduct.save();

        return res.status(201).send({
            status: true,
            message: "Product added successfully",
            product: saved
        });

    } catch (err) {
        console.error(err);
        return res.status(500).send({
            status: false,
            message: "Internal server error",
            error: err.message
        });
    }
};

exports.getRelatedProducts = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the product by ID
        const getProduct = await ProductModel.findById(id);

        if (!getProduct) {
            return res.status(404).send({
                status: false,
                message: "Product Not Found"
            });
        }

        // Fetch related products by category
        const relatedProducts = await ProductModel.find({
            'category.name': getProduct.category.name,
            _id: { $ne: id } // Exclude the current product from the results
        });

        return res.status(200).send({
            status: true,
            message: "Related products retrieved",
            relatedProducts
        });
    } catch (error) {
        console.log('error', error);
        return res.status(500).send({
            status: false,
            message: "Internal error in retrieving related products"
        });
    }
};



exports.getAllProduct = async (req, res) => {
    try {
        const Products = await ProductModel.find({});

        return res.status(200).send({
            status: true,
            message: "product Retrieved",
            Products
        })
    } catch (error) {
        console.log('error', error)
        return res.status(500).send({
            status: true,
            message: "Internal error in product Retrieved"
        })
    }
}

exports.getProductById = async (req, res) => {
    try {
        const id = req.params.id;

        const getProduct = await ProductModel.findById(id);

        if (!getProduct) {
            return res.status(404).send({
                status: false,
                message: "Product Not Found"
            });
        }

        return res.status(200).send({
            status: true,
            message: "product Retrieved",
            getProduct
        })
    } catch (error) {
        console.log('error', error)
        return res.status(500).send({
            status: false,
            message: "Internal error in product Retrieved"
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const UpdateProduct = await ProductModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!UpdateProduct) {
            res.status(400).send({
                status: false,
                message: "Product Not Found"
            })
        }

        res.json(UpdateProduct);
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Internally Product Error"
        })
    }
}


exports.deletePoduct = async (req, res) => {
    try {
        const Deleteproduct = await ProductModel.findByIdAndDelete(
            req.params.id,
            req.body,
            { new: true, runValidators: true })

        if (!Deleteproduct) {
            res.status(400).send({
                status: false,
                message: "Product Not Found"
            })
        }

        res.json(Deleteproduct)
    } catch (error) {
        console.log("Error", error)
        res.status(500).send({
            status: false,
            message: "Internally Product Error"
        })
    }
}

exports.getDeals = async (req, res) => {
    try {
        const deals = await ProductModel.find({ "deal.isDeal": true, "deal.isActive": true });

        return res.status(200).send({
            status: true,
            message: "Active deals retrieved",
            deals
        });
    } catch (error) {
        console.log('error', error);
        return res.status(500).send({
            status: false,
            message: "Error retrieving deals"
        });
    }
};
