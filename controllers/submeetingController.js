// controllers/submeetingController.js
const { Submeeting } = require('../models');

const submeetingController = {
  renderCreateSubmeetingPage: (req, res) => {
    res.render('createSubmeeting');
  },

  createSubmeeting: async (req, res) => {
    try {
      const { name, description, code } = req.body;
      const submeeting = await Submeeting.create({ name, description, code });
      res.redirect('/');
    } catch (error) {
      console.error('Error creating submeeting:', error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = submeetingController;
