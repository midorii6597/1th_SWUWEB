// routes/meeting.js
const express = require('express');
const router = express.Router();
const Meeting = require('../models/meeting'); // 파일 이름 수정

// 모임 생성 페이지 렌더링
router.get('/create', (req, res) => {
  res.render('createMeeting');
});

// 모임 생성 요청 처리
router.post('/create', async (req, res) => {
  try {
    const { name, description, code } = req.body;
    const meeting = await Meeting.create({ name, description, code });
    res.redirect('/meeting/' + meeting.id); // 경로 수정
  } catch (error) {
    console.error('Error creating meeting:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
