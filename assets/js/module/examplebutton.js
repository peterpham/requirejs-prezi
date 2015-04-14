/*   examplebutton.js   */
define(["jquery"], function ($) {

	var ExampleButton = {
		init: function(){
			this.addEventListenerToButton();
		},

		addEventListenerToButton: function() {
			$(".btn-example1").on("click", function(){
				alert("300")
			});			
		}
	}

	return ExampleButton;
});