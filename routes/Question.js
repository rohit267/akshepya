require('dotenv').config();
const router = require('express').Router();
const Question = require('../models/Question');
const User = require('../models/User');

router.use(require('../middlewears/Auth'));

router.get('/', (req, res) => {
  Question.find({ limit: 50}, (err, questions) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(questions);
    }
  });
});

router.post('/', (req, res) => {
  const question = new Question(req.body);
  User.findOne({ email: req.user.email }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      question.askedBy = user._id;
      question.save((err, question) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(question);
        }
      });
    }
  });
});

module.exports = router;


