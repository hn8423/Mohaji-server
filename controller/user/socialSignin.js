const axios = require('axios');
require('dotenv').config();

module.exports = {
  post: async (req, res) => {
    let { token } = req.body;
    let { data:result, status } = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`).catch(err => err.response);
    
    if (status === 200 && result.azp === process.env.google_client_id) {
      // 위 조건이 true라면 정상적으로 클라이언트에서 인증된 사용자임.
      // result.sub에는 user를 특정할 id가 존재한다.
      // 데이터베이스에 해당 sub을 가진 record가 존재한다면
        // session에 해당 유저의 id를 담고 200응답코드와 'OK'를 보내준다.

      // 없다면
        // 404응답코드와 함께 'NOT FOUND'를 보내준다.
      console.log(true);
    } else {
      // 올바르지 않은 접근입니다. 400
    }
    res.status(200).json(result.sub);
  }
}