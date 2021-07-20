import { Meteor } from 'meteor/meteor';
import '../lib/collection.js';

Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish('Taskpub', function () {
  return publicTasksdb.find({}, {
    // fields: { createdById: 0 } //hide this feild
  });
});
Meteor.publish('Taskpri', function () {
  return privateTasksdb.find({}, {
    // fields: { createdById: 0 } //hide this feild
  });
});