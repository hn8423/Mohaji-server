const { user_tag } = require('../../models');

module.exports = {
    post: async (req, res) => {
        let { tag_id, user_id } = req.body;
        let data = await user_tag.create({
            tag_id,
            user_id
        });
        console.log(data)
        res.status(200).end();
    }

}
// user/info 에서 한번에 받아오면 필요 없을수도??



// req.body 에서 객체 형식으로 받아온다?
// 1: true  2: true....
// user_id는 어떻게?
// user_id 1 에 tag_id 1
// user_id 1 에 tag_id 2 이런식으로 저장