require('dotenv').config();
const crypto = require('crypto');
const secret = process.env.cryptoSecret;

module.exports = {
    beforeCreate: (data) => {
        let hash = crypto.createHmac('sha256', secret)
        hash.update(data.password);
        data.password = hash.digest('hex');

    },

    beforeFind: (data) => {
        if (data.where.password) {
            let hash = crypto.createHmac('sha256', secret);
            hash.update(data.where.password);
            data.where.password = hash.digest('hex');
        }
    }
}