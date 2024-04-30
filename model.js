const db = require('./postgres');

module.exports = {
    async getUsers() {
        const result = await db.query('SELECT * FROM users');
        return result.rows;
    }
};
