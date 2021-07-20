Template.publicTodos.helpers({
	publicTask(){
		return publicTasksdb.find();
	},
	Taskpub: function (){
		if(Session.get("hideIncomplete")){
			return publicTasksdb.find({checked: {$ne: true}});
		} else {
			return publicTasksdb.find({});
		}
	},
	hideIncomplete: function(){
		return Session.get("hideIncomplete")
	},
	checked: function(){
		var myCompleted = this.completed;
		if(myCompleted){
			return "checked";
		} else {
			return "";
		}
	},
	userField(){//check to see if image has a saved user
		if (!(this.createdBy == undefined)){
			return true;
		}
		else{
			return false;
		}
	}

});

Template.publicTodos.events({
	'click .js-delTask'(event, instance){
		// console.log(this._id);
		var myId = this._id;
		$("#"+myId).fadeOut('slow',function(){
		publicTasksdb.remove({_id:myId});
		});
	},
	// 'change .hide-incomplete input': function (event) {
 //      Session.set("hideIncompleted", event.target.checked);
 //   },
	'change [id=chk]': function(){
		var myId = this._id;
		var myCompleted = this.completed;
		if(myCompleted){
			publicTasksdb.update({_id:myId}, 
			{$set:{
				"completed": false
				// "completed": completed
			}});
			console.log("Task marked as incomplete: "+ myId);
		} else{
			publicTasksdb.update({_id:myId}, 
			{$set:{
				"completed": true
				// "completed": myCompleted
			}});
			console.log("Task marked as complete: "+ myId);
		}
	},
	'change [id=hide]': function(){
		Session.set("hideIncompleted", event.target.checked);
	}
});