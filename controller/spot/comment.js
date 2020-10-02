//const { playspot } = require('../../models');
const { comment } = require('../../models');
const { user } = require('../../models');

module.exports = {
    get: async (req, res) => {
        let data = await comment.findAll({
            where: { playspot_id },
        });
        // let comments = data.reduce((acc, val) => {
        //     let { message } = val;
        //     acc.push({ message });
        //     return acc
        // }, [])
        res.status(200).json(data)
    },

    post: async (req, res) => {
        let { userid } = req.session;
        let { message, playspot_id } = req.body;
        if (userid) {
            let data = await comment.create({
                playspot_id: playspot_id,
                message: message,    
                user_id: userid.id,
            })
            res.status(201).json(data);
        } else {
            res.status(400).send("잘못된 요청입니다.")
        }
    }
}
