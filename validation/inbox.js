const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateInboxInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 1, max: 1000 })){
    errors.text = 'Text must be between 1 and 1000 characters';
  }

  if(Validator.isEmpty(data.text)){
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};