const controller = {
    detail: (req, res) => {
        let producto = [];
        return res.render("products/detail", {
            title: "Frut-Box | Detail"
        });
    },
    cart: (req, res) => {
        return res.render("products/cart", {
            title: "Frut-Box | Cart"
        });
    },
    create: (req, res) => {
        return res.render("products/create", {
            title: "Frut-Box | Create"
        });
    }
}
module.exports = controller;