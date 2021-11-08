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
    contact: (req, res) => {
        return res.render("users/contact", {
            title: "Frut-Box | Contact"
        })
    }
}   

module.exports = controller;