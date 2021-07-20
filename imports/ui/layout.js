import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // this   is the default BS theme as example
import popper from 'popper.js'
global.Popper = popper // fixes some issues with Popper and Meteor


//ui imports
import './navbar.html';
import './layout.html';
import './publictodos.html';
import './privatetodos.html';
import './footerbar.html';
import './addtask.html';
import './sidenav.html';
import './homepage.html';

//api imports
import '../../lib/collection.js';
import '../../lib/accounts-ui.js';
import '../api/addtask.js';
import '../api/navbar.js';
import '../api/publictodos.js';
import '../api/privatetodos.js';