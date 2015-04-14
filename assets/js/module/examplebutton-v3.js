/*   examplebutton.js   */
define(["jquery"], function ($) {

	var ExampleButton = function () {

		var settings = {
			el: "",				// selector for element
			number: undefined	// number to alert
		},
		module = this;

		module.init = function(options){
			$.extend(true, settings, options);
			this.addEventListenerToButton();
		};

		module.addEventListenerToButton = function() {
			$(settings.el).on("click", function(){
				alert(settings.number);
			});			
		}
	}

	return ExampleButton;
});