const { user } = require('../../models');

module.exports = {
    get: async (req, res) => {
        let { userid } = req.session
        if (userid) {
            await user.findOne({
                where: {
                    email: userid.id
                }
            })
                .then(data => {
                    if (data) {
                        res.status(200).json(data.dataValues);
                    }
                })
        } else {
            res.status(404).send('존재하지 않는 유저 입니다.');
        }

        res.end();
    }
};

