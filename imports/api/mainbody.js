Template.mainBody.helpers({
	publicTask(){
		return publicTasksdb.find();
	},
	checked: function(){
		var myCompleted = this.completed;
		if(myCompleted){
			return "checked";
		} else {
			return "";
		}
	},
	userField(){//ceck to see if image has a saved user
		if (!(this.createdBy == undefined)){
			return true;
		}
		else{
			return false;
		}
	}

});

Template.mainBody.events({
	'click .js-delTask'(event, instance){
		// console.log(this._id);
		var myId = this._id;
		$("#"+myId).fadeOut('slow',function(){
		publicTasksdb.remove({_id:myId});
		});
	},
	'click .js-editTask'(event, instance){
		console.log(this._id);
	},
	'change [type=checkbox]': function(){
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
	}
});