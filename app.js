require('dotenv').config();
const secret = process.env.secret;
const express = require('express')
const app = express();
const port = 4000;
const cors = require("cors");
const session = require("express-session");
const morgan = require("morgan");
const userRouter = require('./routes/user');
// const spotRouter = require('./routes/spot');
// 스팟 라우터 부분입니다/ 아직 미작성

app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: true
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false, }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.use('/user', userRouter);
// app.use('/spot', spotRouter);
// 스팟 라우터 부분입니다/ 아직 미작성


app.listen(port, () => {
  console.log(`app is listening in PORT http://localhost:${port}`)
})

