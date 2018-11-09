var clickCount = 0;//store number of clicks

$('.flipper').click(function(){
	$(this).toggleClass('rotate');
	if(clickCount < 2){
		clickCount = clickCount++;
	}else{
		clickCount = 0;
	}
	console.log(clickCount);
});
