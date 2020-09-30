const { user } = require('../../models');
const { user_tag } = require('../../models');
const { tag } = require('../../models')

module.exports = {
    // get: async (req, res) => {
    //     let { userid } = req.session
    //     if (userid) {
    //         let data = await user.findOne({ where: { id: userid.id } });
    //         res.status(200).json(data.dataValues);
    //     } else {
    //         res.status(404).send('session not fonud');
    //     }
    // }

    // get: async (req, res) => {
    //     let { userid } = req.session;
    //     if (userid) {
    //         let data = await user.findOne({
    //             where: { id: userid.id },
    //             include: user_tag
    //         });
    //         console.log(data)
    //         res.status(200).json(data.dataValues);
    //     } else {
    //         res.status(404).send('session not fonud');
    //     }
    // }
    get: async (req, res) => {
        let { userid } = req.session;
        if (userid) {
            user.belongsToMany()
            let data = await user.findOne({
                where: { id: userid.id },
                include: [
                    {
                        model: user_tag,
                        include: [user, tag]
                    },
                    {
                        model: tag,
                        include: {
                            model: user,
                            include: {
                                model: user_tag,
                                include: [user, tag]
                            }
                        }
                    }
                ]
            })
            console.log("조인 데이터 : ", data)
            res.status(200).json(data);
        } else {
            res.status(404).send('session not fonud');
        }
    }

};

