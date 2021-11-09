const controller = {
    index: (req, res) => {
        return res.render("products/cart", {
            title: "Frut-Box | Cart"
        });
    },
}

module.exports = controller;