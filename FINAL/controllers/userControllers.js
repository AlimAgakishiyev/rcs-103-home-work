const User = require('../model/User');

const register = async (req, res) => {
    const userData = req.body;
    const user = new User(userData);
    const savedUser = await user.save();

    if (!savedUser) return res.status(400).json({ message: 'Registration failed' });

    res.status(200).redirect("/users/login");
};

const login = async (req, res) => {
    const userData = req.body;
    const user = await User.findOne({ username: userData.username });

    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
        
    if (user.password !== userData.password) return res.status(401).json({ message: 'Invalid credentials' });
        
    res.redirect('/products');
};

const registerEjs = (req, res) => {
    res.render('register');
};

const loginEjs = (req, res) => {
    res.render('login');
};

const logout = (req, res) => {
    // Implement logout logic here
    res.redirect('/');
};

const getUsers = async (req, res) => {
    const users = await User.find({});
    res.render('users', { users });
};

const addUser = async (req, res) => {
    const userData = req.body;
    const user = new User(userData);
    await user.save();
    res.status(201).json(user);
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { register, login, logout, registerEjs, loginEjs, getUsers, addUser, deleteUser, editUser };
