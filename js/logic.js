//randomize cards order
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


var clickCount = 0;//store number of clicks

$('.flipper').click(function(){
	$(this).toggleClass('rotate');
	clickCount++;
	console.log(clickCount);
});
