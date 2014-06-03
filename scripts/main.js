var app = {

	matchedIds: [],
	matchedPairs: 0,


	init: function() {
		app.count = 0;
		app.matchedPairs = 0;

		//hide selected sides.
		$('.selected').css('opacity','0');

		app.enableHandlers();

	},

	//enable onClick method for each student
	enableHandlers: function() {
		//Clicking a student in the directory
		$('.student').on('click', function(){
			//class name which is "students idXX"
			var id = $(this).attr('class');
			app.click(id);
		});
	},


	//Upon game Completion
	gameCompletion: function() {
		//stop timer
		window.clearInterval(countdown);

		//display background

		//modal box to post twitter score.
		// to do...
	},

	//Show a selected student after 1st or 2nd click
	//@param id  - index of student
	//@param side - left or right side to be shown (1st or 2nd click)
	showSelected: function(id, side) {

		var selected;
		if (side === 'left') {
			selected = $('.selected.left');
		}
		else if (side === 'right') {
			selected = $('.selected.right');	
		}

		var studentObj = students[id - 1];


		$('.student.id'+id).css('border','2px solid red');

		selected.find('h2').html(studentObj.name);
		selected.find('img').attr('src',studentObj.bigImg);
		selected.find('p').html(studentObj.fact);
		
		selected.css('opacity','1');

	},//showSelected


	//Handle clicking on a student in the grid
	//@param id - correlates to which student in students.js
	click: function(id) {
		
		//cut up "students idXX" to just "XX"
		var index = Number(id.substring(id.indexOf('id') + 2));

		//test if person you are clicking on is already matched.
		if(app.matchedIds.contains(index)){
			console.log('errrror: selected someone already matched!');
		}

		//dont want to select the same person.
		else if (app.firstId === index){
			console.log('errrror: selected same person!');
		}

		//2nd click
		else if (app.count === 1){

			app.secondId = index;

			app.showSelected(index, "right");
			
			//reset to first click 
			app.count = 0;

			//check if they Math
			app.testMatch();
		}

		//first click
		else if(app.count === 0){
			
			app.firstId = index;

			app.showSelected(index, "left");

			app.count++;
		}

	},//click

	testMatch: function() {

		//get 1st and 2nd student JSON object
		var firstStudent = students[app.firstId -1];
		var secondStudent = students[app.secondId - 1];

		//remove event handlers so no other selection can be pressed
		$('.student').off();	

		//if they match.
		if (firstStudent.match === secondStudent.match){
			
			app.matchedPairs++;
			
			//indicate they have been selected
			$('.student.id'+app.firstId).css('background','green').addClass('matched');
			$('.student.id'+app.secondId).css('background','green').addClass('matched');
			
			//add both the id's to the matched array
			//this allows us to test if an id has been matched in the click method
			app.matchedIds.push(app.firstId);
			app.matchedIds.push(app.secondId);
		}
		//else deselect both
		else {
			//remove the selected border
			$('.student.id'+app.firstId).css('border','none');
			$('.student.id'+app.secondId).css('border','none');
		}

		//delay next selection then re-enable event handlers.
		setTimeout(function(){
			$('.selected').css('opacity',0);	
			app.enableHandlers();
		}, 1000);

		//test game completion
		if (app.matchedPairs === 12){
			app.gameCompletion();
		}

	},//test Match

}//app

//Does array contain value.
Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}

$(function () {

	//initialize the project
	app.init();

});//document ready


