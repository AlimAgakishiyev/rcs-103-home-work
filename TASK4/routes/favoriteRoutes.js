const router = require("express").Router();
const fs = require("fs");

const readFavorites = () => {
    return JSON.parse(fs.readFileSync("./data/favorites.json"));
};

const writeFavorites = (data) => {
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
};

router.get("/", (req, res) => {
    const favorites = readFavorites();
    res.render("favorites", { products: favorites });
});

router.delete("/:id", (req, res) => {
    const favorites = readFavorites();
    const index = favorites.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        const deletedProduct = favorites.splice(index, 1)[0];
        writeFavorites(favorites);
        res.json({ message: "Deleted product from favorites", product: deletedProduct });
    } else {
        res.status(404).json({ message: "Product not found in favorites" });
    }
});

module.exports = router;
