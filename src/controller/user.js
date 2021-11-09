const userModel = require('../models/user')
const controller = {
    login: (req, res) => {
        return res.render("users/login", {
            title: "Frut-Box | Login"
        });
    },
    register: (req, res) => {
        return res.render("users/register", {
            title: "Frut-Box | Register"
        });
    },
    save: (req, res) =>{
        return res.status(200).json({data: req.body})
        const newUser = userModel.create(req.body)
        return res.redirect("/user/login")
    },
    access: (req, res) =>{
        return res.status(200).json({data: req.body})
    }
}   

module.exports = controller;