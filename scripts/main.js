var app = {

	matchedIds: [],


	init: function() {
		app.count = 0;
		//hide selected sides.
		$('.selected').css('opacity','0');

		//Clicking a student in the directory
		$('.student').on('click', function(){
			//class name which is "students idXX"
			var id = $(this).attr('class');
			app.click(id);
		});

	},

	//Handle clicking on a student in the grid
	//@param id - correlates to which student in students.js
	click: function(id) {
		
		//cut up "students idXX" to just "XX"
		var index = Number(id.substring(id.indexOf('id')+2));
		console.log("clicked! " + app.count + " index: " + index);
		//get the student object from students array (index + 1 because of 0 indexing)
		var studentObj = students[index -1];
		
		//test if person you are clicking on is already matched.
		if(app.matchedIds.contains(index)){
			console.log('pick someone else!');
		}

		//first click
		else if(app.count === 0){
			app.firstId = index;
			console.log("first click: " + studentObj.name);
			$('.selected.left').css('opacity','1');
			$('.student.id'+index).css('border','2px solid red');

			//fadeIn left
			var selectedLeft = $('.selected.left');
			selectedLeft.find('h2').html(studentObj.name);
			selectedLeft.find('img').attr('src',studentObj.bigImg);
			selectedLeft.find('p').html(studentObj.fact);

			selectedLeft.find('h2').fadeIn();
			selectedLeft.find('img').fadeIn();
			selectedLeft.find('p').fadeIn();
			app.count++;
		}


		//dont want to select the same person.
		else if (app.firstId === index){
			console.log('errrror: no!');
		}

		//2nd click
		else if (app.count ===1){

			console.log("2nd click: " + studentObj.name);

			app.secondId = index;
			console.log("Second ID!!! : " + app.secondId);
			console.log("student2 id: " + index);
			$('.student.id'+index).css('border','2px solid red');

			var selectedRight = $('.selected.right');
			selectedRight.css('opacity','1');

			//set the h2, img and p to the appropriate student's info
			selectedRight.find('h2').html(studentObj.name);
			selectedRight.find('img').attr('src',studentObj.bigImg);
			selectedRight.find('p').html(studentObj.fact);

			//Make the right selected VISIBLE!!!
			selectedRight.find('h2').fadeIn(5);
			selectedRight.find('img').fadeIn(5);
			selectedRight.find('p').fadeIn(5);
			
			//reset to first click 
			app.count = 0;
			//check if they Math
			app.testMatch();
		}
	},

	testMatch: function() {

		//get 1st and 2nd student JSON object
		var firstStudent = students[app.firstId -1];
		var secondStudent = students[app.secondId - 1];

		//if they match.
		if (firstStudent.match === secondStudent.match){
			
			//indicate they have been selected
			$('.student.id'+app.firstId).css('background','green');
			$('.student.id'+app.secondId).css('background','green');
			
			//add both the id's to the matched array
			//this signifies they have already been matched
			app.matchedIds.push(app.firstId);
			app.matchedIds.push(app.secondId);

			//cache selected, delay and fade out
			var selected = $('.selected');
			selected.find('h2').delay(1200).fadeOut(900);
			selected.find('img').delay(1200).fadeOut(900);
			selected.find('p').delay(1200).fadeOut(900);
		}
		//else deselect both
		else {

			//remove the selected border
			$('.student.id'+app.firstId).css('border','none');
			$('.student.id'+app.secondId).css('border','none');

			//fade out both.
			var selected = $('.selected');
			selected.find('h2').delay(1200).fadeOut(900);
			selected.find('img').delay(1200).fadeOut(900);
			selected.find('p').delay(1200).fadeOut(900);
		
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


