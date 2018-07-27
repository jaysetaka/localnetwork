const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile');
const validateInboxInput = require('../../validation/inbox');
// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');
// load Inbox model
const Inbox = require('../../models/Inbox');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({
  msg: 'Inbox'
}));

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get('/profile/user/:user_id/:id', passport.authenticate('jwt', {
      session: false
    }), (req, res) => {
  Inbox.findById(req.params.id)
    .then(inbox => res.json(inbox))
    .catch(err =>
      res.status(404).json({
        notextfound: 'No message found with that ID'
      })
    );
});


// @route   Inbox api/inbox
// @desc    Create message
// @access  Private
router.post(
  '/profile/user/:user_id',
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    const {
      errors,
      isValid
    } = validateInboxInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newInbox = new Inbox({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newInbox.save().then(inbox => res.json(inbox));
  }
);



// @route   POST api/inbox/response/:id
// @desc    respond to inbox
// @access  Private
router.post(
  "/profile/user/:user_id/response/:id",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    const { errors, isValid } = validateInboxInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Inbox.findById(req.params.id)
      .then(inbox => {
        const newResponse = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };

        // Add to comments array
        inbox.responses.unshift(newResponse);

        // Save
        inbox.save().then(inbox => res.json(inbox));
      })
      .catch(err =>
        res.status(404).json({
          inboxnotfound: "No message found"
        })
      );
  }
);

// // @route   DELETE api/posts/comment/:id/:comment_id
// // @desc    Remove comment from post
// // @access  Private
// router.delete(
//   '/comment/:id/:comment_id',
//   passport.authenticate('jwt', {
//     session: false
//   }),
//   (req, res) => {
//     Post.findById(req.params.id)
//       .then(post => {
//         // Check to see if comment exists
//         if (
//           post.comments.filter(
//             comment => comment._id.toString() === req.params.comment_id
//           ).length === 0
//         ) {
//           return res
//             .status(404)
//             .json({
//               commentnotexists: 'Comment does not exist'
//             });
//         }

//         // Get remove index
//         const removeIndex = post.comments
//           .map(item => item._id.toString())
//           .indexOf(req.params.comment_id);

//         // Splice comment out of array
//         post.comments.splice(removeIndex, 1);

//         post.save().then(post => res.json(post));
//       })
//       .catch(err => res.status(404).json({
//         postnotfound: 'No post found'
//       }));
//   }
// );

module.exports = router;


