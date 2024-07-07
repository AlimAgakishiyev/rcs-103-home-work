const router = require("express").Router();
const fs = require("fs");

const readData = (filename) => {
    return JSON.parse(fs.readFileSync(`./data/${filename}.json`));
};

const writeData = (filename, data) => {
    fs.writeFileSync(`./data/${filename}.json`, JSON.stringify(data));
};

router.get("/", (req, res) => {
    const basket = readData("basket");
    res.render("baskets", { basket });
});

router.post("/", (req, res) => {
    const basket = readData("basket");
    const newProduct = req.body;
    basket.push(newProduct);
    writeData("basket", basket);
    res.json({ message: "Product added to basket", product: newProduct });
});

router.delete("/:id", (req, res) => {
    const basket = readData("basket");
    const index = basket.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        const deletedProduct = basket.splice(index, 1);
        writeData("basket", basket);
        res.json({ message: "Deleted product from basket", product: deletedProduct });
    } else {
        res.status(404).json({ message: "Product not found in basket" });
    }
});

module.exports = router;
