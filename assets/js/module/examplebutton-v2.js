/*   examplebutton.js   */
define(["jquery"], function ($) {

	var settings = {
		el: "",				// selector for element
		number: undefined	// number to alert
	};

	var ExampleButton = {

		init: function(options){
			$.extend(true, settings, options);
			this.addEventListenerToButton();
		},

		addEventListenerToButton: function() {
			$(settings.el).on("click", function(){
				alert(settings.number);
			});			
		}
	}

	return ExampleButton;
});