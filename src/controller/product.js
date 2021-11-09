const productModel = require('../models/product')
const controller = {
    detail: (req, res) => {
        let producto = [];
        return res.render("products/detail", {
            title: "Frut-Box | Detail"
        });
    },
    
    create: (req, res) => {
        return res.render("products/create", {
            title: "Frut-Box | Create"
        });
    },
    save: (req, res) =>{
        req.body.file = req.file ? req.file.filename : "default.jpg"
        return res.status(200).json({data: req.body})
        const newProduct = productModel.create(req.body)
        return res.redirect(`/product/${newProduct.id}`)
    },
    update: (req, res) =>{
        return res.status(200).json({files:req.files,data: req.body,params:req.params})
    },
    delete: (req, res) => {
        return res.status(200).json({data: req.body,params:req.params})
    }
}
module.exports = controller;