const { user } = require('../../models');
const { user_tag } = require('../../models');

module.exports = {
    post: async (req, res) => {
        let { email, nickname, password, tag } = req.body
        console.log("여기가 태그 :: ", tag)
        let [result, created] = await user.findOrCreate({
            where: { email },
            defaults: {
                nickname,
                password
            }
        });

        if (!created) {
            return res.status(409).send('이미 존재하는 이메일입니다.');
        } else {
            console.log("result : ", result)
            //유저 아이디는 위에서 가저오고
            // 태그는 반복문을 돌리고
            for (let i in tag) {
                if (tag[i]) {
                    let tagData = await user_tag.create({
                        user_id: result.id,
                        tag_id: i
                    })
                    console.log("tagData :: ", tagData)
                    // 다 같이 들어가질까?? => X
                    // userId도 i 만큼의 반복이 필요!
                }

            }
            return res.status(200).end();
        }
    }
}
/*
tags는 아래와 같은 객체 형식, 키값은 boolean
let temp = {
    1: true,
    2: false,
    3: true
}
1. req.body.tag 에서 객체의 값을 어떻게 가저올지
=> { '1': true, '2': true, '3': false } 이런식으로 받을 수 있음

2. 가저왔다면 어떻게 처리할지? => for문으로 tag[i] 의 값이 트루라면 위에서 유저 아이디를 가저와서 함께 처리
3. 다 넣었다면?
4. 마이페이지에서 유저와 태그의 테이블 연결이 필요!ㅌ


for (let i in temp) {
    if (temp[i]) {
        user_tag.create({ user_id: result.id, tag_id: i })
    }
}

*/
