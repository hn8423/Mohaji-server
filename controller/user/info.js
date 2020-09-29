const { user } = require('../../models');

module.exports = {
    get: async (req, res) => {
        let { userid } = req.session
        if (userid) {
            let data = await user.findOne({ where: { id: userid.id } });
            res.status(200).json(data.dataValues);
        } else {
            res.status(404).send('session not fonud');
        }
    }

};

