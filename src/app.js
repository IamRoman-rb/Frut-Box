const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const cookie = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const app = express();

// Server
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => console.log("Server Start http://localhost" + app.get("port")));

// EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// Public Acess
const publichPath = path.resolve(__dirname, "../public");
app.use(express.static(publichPath));

// Module Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(methodOverride("_method"))
app.use(cookie())
app.use(session({
    secret: "frut box", 
    resave: false,
saveUninitialized: true}))

// Web Routes
const main = require("./routers/main");
app.use(main);
const user = require("./routers/user");
app.use("/user",user);
const product = require("./routers/product");
app.use("/product",product);
const cart = require("./routers/cart");
app.use("/cart",cart);