const express = require("express");
const { sequelize } = require("./models");
// const authRouter = require("./routes/auth");
const bodyParser = require('body-parser');
const postRouter = require("./routes/post");
const loginRouter = require("./routes/login");
const SubClublistROuter = require("./routes/SubClublist");
const meetingRoutes = require('./routes/meeting'); // 모임 생성 라우터
const submeetingRoutes = require('./routes/submeeting');  // 소모임 생성 라우터 추가
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

// 모임 생성 페이지 라우트
app.get('/createMeeting', (req, res) => {
  res.render('createMeeting');
});

// 소모임 생성 페이지 라우트
app.get('/createSubmeeting', (req, res) => {
  res.render('createSubmeeting');
});

// 모임 생성 요청 처리
app.post('/meeting/create', async (req, res) => {
  try {
    const { name, description, code } = req.body;
    const meeting = await Meeting.create({ name, description, code });
    res.redirect('/meeting/' + meeting.id); // 생성된 모임 페이지로 이동
  } catch (error) {
    console.error('Error creating meeting:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use("/", loginRouter); 

app.use("/posts", postRouter);

app.use("/subclublist",SubClublistROuter);

app.use("/meetings", meetingRoutes); // 모임 라우트 등록

app.use('/submeeting', submeetingRoutes); // 소모임 라우터 등록

app.listen(3000, async () => {
  console.log("3000번 서버 가동");
  await sequelize.authenticate();
  console.log("db authenticate");
});
