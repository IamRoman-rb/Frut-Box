const controller = {
    index: (req, res) => {
        return res.render("index", {
            // productos: productos, 
            title: "Frut-Box | Home"
        });
    },
    contact: (req, res) => {
        return res.render("users/contact", {
            title: "Frut-Box | Contact"
        })
    },
}

module.exports = controller;