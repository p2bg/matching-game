// Whole-script strict mode syntax
'use strict';

//avoid click if two cards are selected
var cardsTurned = false;

// cards
var order = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

//apply random order
var cards = $('.game-board>div');

//store number of clicks
var clickCount = 0;

// number of Moves
var movesNum = 0;

//store number of matchs
var matchs = 0;

//randomize cards order (shuffle function font: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//shuffle the cards order
order = shuffle(order);

//apply random number to class order
cards.each(function(index){
	$(this).addClass('order-'+order[index]);
})

//flip card
$('.game-board').on('click','.flipper',function(){
	if(!cardsTurned){
		//store the clicked card data
		var cardCliked = $(this);
		//rotate card and count click
		rotate(cardCliked);
		var cardContent = $('.rotate .back')
			//checks if first or second card
			if(clickCount%2 === 0){
				cardsTurned = true;
				//get card content for comparison
				if(typeof cardContent[1] !== 'undefined'){
					var contentOne = cardContent[0].innerHTML;
					var contentTwo = cardContent[1].innerHTML;
				//match
					if(contentOne === contentTwo){
						setTimeout(function(){
							$('.rotate').addClass('match animated flash faster');
							$('.match').removeClass('flipper rotate');
							matchs++;
							gameStatus(matchs);
						}, 600);
					//mismatch
					}else{
						setTimeout(function(){
							$('.rotate').toggleClass('wrong');
							setTimeout(function() {
								$('.rotate').toggleClass('rotate wrong');
							},600);
						},300);
					}
			}
			setTimeout(function() {
				cardsTurned = false;
			},900);
		}
		//set the moves
		moves();
		//set the Stars
		starCount(clickCount);
	}
});

//reload page
$('.fa-redo-alt').click(function() {
	location.reload();
})

$('.btn-primary').click(function() {
	location.reload();
})

//checks if the game is over
function gameStatus(matchs){
	if (matchs === 8){
		//add stars count to congratulations screen
		var stars = $('.fa-star');
		$('.stars').text(stars.length);
		//add the time and then stop it
		var time = $('#timer');
		$('.time').text(time[0].textContent);
		clearTimeout();
		//remove game board and stats from the screen
		setTimeout(function(){
			$('.game-board').remove();
			$('.stats').remove();
			//adds congratulation screen
			$('.congrats').removeClass('d-none');
		},600);
	}
}

function rotate(cardCliked){
	cardCliked.toggleClass('rotate');
	clickCount++;
}

//change the number of stars based on number of moves
function starCount(clickCount){
	if(movesNum===10 && clickCount%2 === 0){
		$('.stats p i:first-child').remove();
	}else if(movesNum===15 && clickCount%2 === 0){
		$('.stats p i:first-child').remove();
	}
}

//sets the timer, based on http://jsfiddle.net/gPrwW/1/
$(document).ready(function (e) {
    var $worked = $("#timer");

    function update() {
        var myTime = $worked.html();
        var ss = myTime.split(":");
        var dt = new Date();
        dt.setHours(0);
        dt.setMinutes(ss[0]);
        dt.setSeconds(ss[1]);

        var dt2 = new Date(dt.valueOf() + 1000);
        var temp = dt2.toTimeString().split(" ");
        var ts = temp[0].split(":");

        $worked.html(ts[1]+":"+ts[2]);
        setTimeout(update, 1000);
    }

    setTimeout(update, 1000);
});

//set the score
function moves(){
	if($('.rotate').length===2){
		movesNum++;
	$('.moves').text(movesNum);
	}
}
