Template.privateTodos.helpers({
	privateTask(){
		return privateTasksdb.find();
	},
	Taskpri: function (){
		if(Session.get("hideIncomplete")){
			return publicTasksdb.find({checked: {$ne: true}});
		} else {
			return publicTasksdb.find({});
		}
	},
	checked: function(){
		var myCompleted = this.completed;
		if(myCompleted){
			return "checked";
		} else {
			return "";
		}
	},
	userField(){ //ceck to see if content a saved user
		if (!(this.createdBy == undefined)){
			return true;
		}
		else{
			return false;
		}
	}

});

Template.privateTodos.events({
	'click .js-delTask'(event, instance){
		// console.log(this._id);
		var myId = this._id;
		$("#"+myId).fadeOut('slow',function(){
		privateTasksdb.remove({_id:myId});
		});
	},
	'click .js-editTask'(event, instance){
		console.log(this._id);
	},
	'change .hide-incomplete input': function (event) {
      Session.set("hideIncompleted", event.target.checked);
   },
	'change [type=chk]': function(){
		var myId = this._id;
		var myCompleted = this.completed;
		if(myCompleted){
			privateTasksdb.update({_id:myId}, 
			{$set:{
				"completed": false
				// "completed": completed
			}});
			console.log("Task marked as incomplete: "+ myId);
		} else{
			privateTasksdb.update({_id:myId}, 
			{$set:{
				"completed": true
				// "completed": myCompleted
			}});
			console.log("Task marked as complete: "+ myId);
		}
	}
});