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

        // Check by SKU (better uniqueness check than title)
        const existing = await ProductModel.findOne({ SKU });
        if (existing) {
            return res.status(400).send({
                status: false,
                message: "Product with this SKU already exists"
            });
        }

        if (!req.file) {
            return res.status(400).send({
                status: false,
                message: "Product image is required"
            });
        }

        // Optional: Validate image type
        if (!req.file.mimetype.startsWith('image/')) {
            return res.status(400).send({ status: false, message: "Only image files are allowed" });
        }

        const uploadResult = await uploadFile(req.file.path);
        await fs.unlink(req.file.path); // cleanup local file

        const normalizedName = (categoryName || 'Others').trim();
        const capitalizedName = normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1).toLowerCase();

        const newProduct = new ProductModel({
            title,
            tags,
            category: { name: capitalizedName },
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
        console.error("Add product error:", err);
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
    const {
      title,
      tags,
      categoryName,
      price,
      SKU,
      description,
      brand,
      specs,
      sort,
      sale,
      stock,
      salePercent,
      deal
    } = req.body;

    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ status: false, message: "Product not found" });
    }

    if (title) product.title = title;
    
    if (tags) {
      try {
        product.tags = typeof tags === 'string' ? JSON.parse(tags) : tags;
      } catch (e) {
        return res.status(400).json({ status: false, message: "Invalid JSON in 'tags'" });
      }
    }

    if (categoryName) {
      const normalized = categoryName.trim();
      const capitalized = normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase();
      product.category.name = capitalized;
    }

    if (price !== undefined) product.price = parseFloat(price);
    if (SKU) product.SKU = SKU;
    if (description) product.description = description;
    if (brand) product.brand = brand;
    if (specs) product.specs = specs;
    if (sort) product.sort = sort;
    if (sale !== undefined) product.sale = sale === 'true' || sale === true;
    if (stock !== undefined) product.stock = parseInt(stock);
    if (salePercent !== undefined) product.salePercent = parseFloat(salePercent);

    if (deal && typeof deal === 'object') {
      product.deal = {
        isDeal: deal.isDeal === 'true' || deal.isDeal === true,
        discountPercent: parseFloat(deal.discountPercent) || 0,
        couponCode: deal.couponCode || '',
        isActive: deal.isActive === 'true' || deal.isActive === true,
        expiry: deal.expiry ? new Date(deal.expiry) : null
      };
    }

    if (req.file) {
      const uploadResult = await uploadFile(req.file.path);
      product.imageUrl = uploadResult.secure_url;
      await fs.unlink(req.file.path); // ✅ async file deletion
    }

    const updated = await product.save();

    res.status(200).json({
      status: true,
      message: "Product updated successfully",
      product: updated
    });

  } catch (error) {
    console.error('Update Error:', error);
    res.status(500).json({
      status: false,
      message: "Failed to update product",
      error: error.message
    });
  }
};


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
