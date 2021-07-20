Template.addTask.events({
	'click .js-saveMe'(event, instance){
		var myList = $("#listName").val();
		var myTask = $("#taskName").val();
		var myStat1 = $("#p1:checked").val();	
		var myStat2 = $("#p2:checked").val();
		if (myStat1 ){
			console.log("saved to: " + myStat1);
			publicTasksdb.insert({
				"task": myTask,
				"status": myStat1,
				"completed": false,
				"createdOn": new Date().getTime(),
				"createdBy": Meteor.users.findOne({_id:Meteor.userId()}).username,
	 			"createdById": Meteor.userId()
			});
		}else if(myStat2) {
			console.log("saved to: " + myStat2);
			privateTasksdb.insert({
				"task": myTask,
				"status": myStat2,
				"completed": false,
				"createdOn": new Date().getTime(),
				"createdBy": Meteor.users.findOne({_id:Meteor.userId()}).username,
	 			"createdById": Meteor.userId()
			});
		}
		$("#AddTaskModal").modal("hide");
		var myTask = $("#taskName").val("");
	},
	'click .js-closeMe'(event, instance){
		var myTask = $("#taskName").val("");
	}
});
