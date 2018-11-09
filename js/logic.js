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
	//apply random number to class order
	each
}

// cards
var order = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
order = shuffle(order);

//apply random order
var cards = $('.game-board>div');
cards.each(function(index){
	$(this).addClass('order-'+order[index]);
})

//store number of clicks
var clickCount = 0;

//flip card
$('.game-board').on('click','.flipper',function(){
	$(this).toggleClass('rotate');
	clickCount++;
	var cardContent = $('.rotate .back')
		//checks if first or second card
		if(clickCount%2 ===0){
			//set the moves
			$('.moves').text(clickCount/2);
			//get card content for comparison
			 if(typeof cardContent[1] !== 'undefined'){
			var contentOne = cardContent[0].textContent;
			var contentTwo = cardContent[1].textContent;
			//match
			if(contentOne === contentTwo){
				$('.rotate').addClass('match');
				$('.match').removeClass('flipper rotate');
			//mismatch
			}else{
				setTimeout(function(){
					$('.rotate').toggleClass('rotate');
				},600)
			}
		}
	}
});
