const Store = require('../models/product');

const upload = require('../helpers/upload')

const uploadFile = async(req, res) => {
    try {
        const Upload = await upload.uploadFile(req.file.path);

        var store = new Store({
            imageUrl: Upload.secure_url
        })

        var record = await store.save();
        res.status(200).send({
            status: true,
            message: "File Uploaded Successfully",
            url:record
        })
    } catch (error) {
        console.log("Error", error);
        res.status(500).send({
            status: false,
            message: "File Uploading has error"
        })
    }
}

module.exports = {
    uploadFile
};