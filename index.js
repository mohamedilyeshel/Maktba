// import packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// DB connection
mongoose.connect("mongodb+srv://username:password@cluster0.nsn9grx.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.on("connected", () => {console.log("Connection with db good")});
mongoose.connection.on("error", (err) => {console.log("Connection with db failed", err)});

// import routes
const routerKteb = require("./routes/ktob.routes")

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes middleware
app.use("/ktob", routerKteb);

// server listening
const port = 3000;

app.listen(port,() => {
    console.log("Connection done with the server");
});