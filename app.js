// require("./models");
const express = require('express')
const app = express();
const port = 3000;
const cors = require("cors");
const session = require("express-session");
const morgan = require("morgan");

const controller = require('./controllers')

// app.use(
//   session({
//       secret: "secret",
//       resave: false,
//       saveUninitialized: true
//   })
// );

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false, }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

