var main = function() {
  //We want to attach an event handler to an img element
  	//to respond to a click event
  $('img').click(function(){ //seeing this syntax a lot
  	//when we click image, execute whatever we pass in here
  	//binding certain action to element on page (in this case img)

  	// console.log('clicking on imgs works'); <-- just to show that the even handler is working
  	//toggle class of ul class element (shows and hides element- if it's already showing, it hides it, if it isn't then it shows it)
  	$('.dropdown-menu').toggle()
  });

}
 
$(document).ready(main); //Long-form of this $(main)



/*****************************************************************************
		Notes
*****************************************************************************/

/*
1. Select html elements with jQuery
2. Attaching event to them
3. Passing anonymous function
4. Acting on that

- For this exercise, the display of the drop-down none is a function of bootstrap

*/