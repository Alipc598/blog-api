const express = require('express');
const router = express.Router();
const model = require('./model');

router.get('/users', async (req, res) => {
    try {
        const users = await model.getUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
