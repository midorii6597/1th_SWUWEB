const express = require("express");
const { sequelize } = require("./models");
const authRouter = require("./routes/auth");
const bodyParser = require('body-parser');
const postRouter = require("./routes/post");
const loginRouter = require("./routes/login");
const SubClublistROuter = require("./routes/SubClublist");
// const authMiddleware = require("./middleware"); 이걸쓰게 되면 모든 과정에서 로그인검사를 하기에 문제발생함
const passport = require('passport');

const app = express();
const { authMiddleware } = require("./Middleware/auth");
const cors = require("cors");
const session = require("express-session");
app.use(bodyParser.json());
app.use(passport.initialize());

// 라우트 등록



app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// 라우트 등록

app.use(bodyParser.json());
app.use(passport.initialize());

// 라우트 등록



app.set('port',process.env.PORT||3000);
app.set('view engine', 'ejs');
app.set('views', './views');

sequelize.sync({force:false})
  .then(()=>{
    console.log('데이터베이스 연결 성공');

  })
  .catch((err)=>{
    console.error(err);
  });

app.use(
  cors({
    origin: [
      "http://127.0.0.1:3306",
      
      
     
      ],
      credentials: true,
    })
  );

  
  // 세션 사용
app.use(
    session({
      secret: '1234',
      resave: false,
      saveUninitialized: false,
    })
  );

app.get('/board/post', (req, res) => {
  res.render('post');
});

// app.use(authMiddleware);

app.get('/login', (req, res) => {
 
  res.render('login');
})

app.get('/subclublist', (req, res) => {
  user=req.user
  res.render('subclub');
})
app.use("/", loginRouter); 

app.use("/posts", postRouter);


app.use("/subclublist",SubClublistROuter)

app.listen(3000, async () => {
  console.log("3000번 서버 가동");
  await sequelize.authenticate();
  console.log("db authenticate");
});
