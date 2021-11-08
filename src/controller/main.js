const controller = {
    index: (req, res) => {
        return res.render("index", {
            // productos: productos, 
            title: "Frut-Box | Home"
        });
    }
}

module.exports = controller;