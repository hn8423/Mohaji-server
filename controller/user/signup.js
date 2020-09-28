const { user } = require('../../models');

module.exports = {
    post: async (req, res) => {
        let { email, nickname, password, profile_img, tag } = req.body
        await user.findOrCreate({
            where: { email },
            defaults: {
                nickname,
                password,
                profile_img,
                tag  //??!!수정 필요할듯 합니다.
            }
        })
            .then(([result, created]) => {
                if (!created) {
                    return res.status(409).send('이미 존재하는 이메일입니다.');
                }
                res.status(201).json(result.nickname);
            })
        res.end();
    }
}

