$(function () {

	//initialize the project
	init();

	var count; //first click or 2nd
	var firstId; //first person selected
	var secondId; //second person selected

	var matchedIds = [];//matched Ids.

	function init() {
		count = 0;
		$('.selected').css('opacity','0');
	}//init

	//tests if two selections are a Match.
	function testMatch() {
		var firstStudent = students[firstId -1];
		var secondStudent = students[secondId - 1];

		//if they match.
		if (firstStudent.match === secondStudent.match){
			
			$('.student.id'+firstId).css('background','green');
			$('.student.id'+secondId).css('background','green');
			matchedIds.push(firstId);
			matchedIds.push(secondId);

			$('.selected h2').fadeOut(900);
			$('.selected img').fadeOut(900);
			$('.selected p').fadeOut(900);
		}
		else {
			$('.student.id'+firstId).css('border','none');
			$('.student.id'+secondId).css('border','none');

			$('.selected.left h2').delay(1200).fadeOut(500);
			$('.selected.left img').delay(1200).fadeOut(500);
			$('.selected.left p').delay(1200).fadeOut(500);
			$('.selected.right h2').delay(1200).fadeOut(500);
			$('.selected.right img').delay(1200).fadeOut(500);
			$('.selected.right p').delay(1200).fadeOut(500);			
		}
	}//test match

	//Does array contain value.
	Array.prototype.contains = function ( needle ) {
	   for (i in this) {
	       if (this[i] == needle) return true;
	   }
	   return false;
	}

	//Clicking a student in the directory
	$('.student').on('click', function(){
		//class name which is "students idXX"
		var id = $(this).attr('class');
		
		//cut up "students idXX" to just "XX"
		var index = Number(id.substring(id.indexOf('id')+2));

		//get the student object from students array (index + 1 because of 0 indexing)
		var studentObj = students[index -1];
		
		//test if person you are clicking on is already matched.
		if(matchedIds.contains(index)){
			console.log('pick someone else!');
		}
		//first click
		else if(count === 0){
			firstId = index;
			$('.selected.left').css('opacity','1');
			$(this).css('border','2px solid red');
			$('.selected.left h2').html(studentObj.name);
			$('.selected.left img').attr('src',studentObj.bigImg);
			$('.selected.left p').html(studentObj.fact);

			$('.selected.left h2').fadeIn();
			$('.selected.left img').fadeIn();
			$('.selected.left p').fadeIn();
			count++;
		}
		//2nd click

		//dont want to select the same person.
		else if (firstId === index){
			console.log('errrror: no!');
		}
		else if (count ===1){
			secondId = index;
			$('.selected.right').css('opacity','1');
			$(this).css('border','2px solid red');
			$('.selected.right h2').html(studentObj.name);
			$('.selected.right img').attr('src',studentObj.bigImg);
			$('.selected.right p').html(studentObj.fact);

			$('.selected.right h2').fadeIn(5);
			$('.selected.right img').fadeIn(5);
			$('.selected.right p').fadeIn(5);
			count= 0;
			testMatch();
		}

	});//on click;


});