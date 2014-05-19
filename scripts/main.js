$(function () {

	//initialize the project
	init();

	var count; //first click or 2nd
	var firstId; //first person selected
	var secondId; //second person selected

	function init() {
		count = 0;
		$('.selected').css('opacity','0');
	}//init

	function testMatch() {
		if (students[firstId-1].match === students[secondId-1].match){
			console.log("Its a Match!!!")
		}
		else {
			
		}
	}//test match



	//Clicking a student in the directory
	$('.student').on('click', function(){
		//class name which is "students idXX"
		var id = $(this).attr('class');
		
		//cut up "students idXX" to just "XX"
		var index = Number(id.substring(id.indexOf('id')+2));

		//get the student object from students array (index + 1 because of 0 indexing)
		var studentObj = students[index -1];
		
		//first click
		if(count === 0){
			firstId = index;
			$('.selected.left').css('opacity','1');
			$(this).css('border','2px solid red');
			$('.selected.left h2').text(studentObj.name);
			$('.selected.left img').attr('src',studentObj.bigImg);
			$('.selected.left p').text(studentObj.fact);
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
			$('.selected.right h2').text(studentObj.name);
			$('.selected.right img').attr('src',studentObj.bigImg);
			$('.selected.right p').text(studentObj.fact);
			count= 0;
			testMatch();
		}

	});//on click;


});