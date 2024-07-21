const router = require("express").Router();
const { createProduct, getProducts, deleteProduct, updateProduct, getProductById, addToFavorite } = require("../controllers/productController");

router.get("/admin/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/edit/:id", getProductById);
router.post("/favorites/:id", addToFavorite);  

module.exports = router;
