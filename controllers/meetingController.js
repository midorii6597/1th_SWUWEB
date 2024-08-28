// controllers/meetingController.js
const { Meeting } = require('../models');

const meetingController = {
  // 모임 생성 페이지 렌더링
  renderCreateMeetingPage: (req, res) => {
    res.render('createMeeting');
  },

  // 모임 생성 요청 처리
  createMeeting: async (req, res) => {
    try {
      const { name, description, code } = req.body;
      const meeting = await Meeting.create({ name, description, code });
      res.redirect(`/meetings/${meeting.id}`); // 생성된 모임 페이지로 이동
    } catch (error) {
      console.error('Error creating meeting:', error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = meetingController;
