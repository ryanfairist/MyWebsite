(function(){
	$('.slides img:first').addClass('.top');

	var change = function(){
		//CHANGE CLASS TOP
		var curr = $('slides img.top');
		var next = curr.next();

		if (!next.length){
			next = $('slides img:first');
			next.addClass('top');
			curr.animate({opacity:0.0},300, function(){
			curr.removeClass('top');
			curr.css({opacity:1.0})

		});
		}else{
			next.css({opacoty:0:0})
			.addClass('top')
			.animate({opacity: 1.0}, 300, function()}
			curr.removeClass('top');
			});	
		//next.addClass('top');
		//curr.removeClass('top');
		}
	}
	setInterval(change,10000);
});

