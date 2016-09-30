var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{ type: String, ref: 'Course' }]
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
schema.virtual('firstName').get(function() {
  var splited = this.name.split(' ');
  if (splited.length > 1) {
    return splited[0];
  }

  return this.name;
});

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function() {
  var splited = this.name.split(' ');
  if (splited.length > 1) {
    return splited[splited.length - 1];
  }

  return this.name;
});

module.exports = schema;
