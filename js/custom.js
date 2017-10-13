// Init Materialize Js

(function($){
  $(function(){
  	// Initialize Side Navigation
    $('.button-collapse').sideNav({
    	menuWidth: 300, // Default is 300
		edge: 'right', // Choose the horizontal origin
		closeOnClick: true,
		draggable: true, 
    });
    // Initialize Parallax
    $('.parallax').parallax();

    

  }); // end of document ready
})(jQuery); // end of jQuery name space


