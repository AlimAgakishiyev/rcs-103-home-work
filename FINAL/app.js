const express = require("express");
const path = require("path");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const port = 3000;

const uri = "mongodb+srv://alimra:Alim123@cluster0.vfqamwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(() => {
    console.log("Mongoose connected");
}).catch((e) => {
    console.error('Connection error', e.message);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRoute = require("./routes/productRoutes")
const userRoute = require("./routes/userRoutes")
const favoriteRoutes = require("./routes/favoriteRoutes");
const basketsRoute = require('./routes/basketsRoutes'); // Add this line

app.get('/', (req, res)=>{
  res.render('home');
})

app.use('/products', productRoute);
app.use("/users", userRoute)
app.use("/favorites", favoriteRoutes);
app.use('/baskets', basketsRoute);

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});