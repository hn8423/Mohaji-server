const { user } = require('../../models');

module.exports = {
    post: async (req, res) => {
        let { email, password } = req.body;
        await user.findOne({
            where: {
                email: email,
                password: password
            }
        })
            .then(data => {
                if (data) {
                    req.session.userid = { id: data.email };
                    res.status(200).json(data.nickname);
                } else {
                    res.status(404).send("User is not invalid.");
                }
            })
        res.end();
    }
};

