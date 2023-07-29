jQuery(function($) {

    $(document).ready(function() {
    
        "use strict";

        Preloader();
        Modal();

    });

    function Preloader(){
	    setTimeout(function() {
	        $('.preloader-overlay').removeClass('active');
	    }, 1000);

	    setTimeout(function() {
	        $('.preloader-overlay').hide();
	    }, 500);
    }

    function Modal(){
    	$('.player__poster__cta').on('click', function(){
    		$(this).hide('slow');
    		$('.player__preloader').show('slow');
    		setTimeout(function(){
    			$('.player__preloader').hide('slow');
    			$('#user-signup-modal').modal('show');
    		}, 2000);
    	});
    }
});