;(function($, WYSIRWYG) {
	"use strict";

	var controller = WYSIRWYG.controllers['ModuleEditor'];
	controller.events.once('load template', function() {
		controller.view.render($('body'));
	});

})(jQuery, WYSIRWYG);