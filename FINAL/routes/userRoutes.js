const router = require('express').Router();
const { register, login, logout, registerEjs, loginEjs, getUsers, addUser, deleteUser, editUser } = require('../controllers/userControllers');

router.get("/register", registerEjs);
router.get("/login", loginEjs);
router.get("/", getUsers);

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/", addUser);
router.delete("/:id", deleteUser); 
router.put("/:id", editUser); 

module.exports = router;
