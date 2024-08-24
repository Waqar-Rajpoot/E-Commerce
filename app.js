const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const db = require("./connections/mongoose.connection");

const ownersRouter = require("./routes/ownersRouters");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");


const app = express();

const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);




app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})
 
