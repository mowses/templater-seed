;(function($, Templater, Events, ObserverCore) {
	"use strict";

	$.extend(WYSIRWYG, {
		controllers: {},
		Controller: {
			extend: function(definition) {
				var controller = new Controller(definition);
				var controller_def = {};

				// created this to make context for definition methods
				// this way `this` will be the context of controller object
				$.each(controller.definition, function(k, item) {
					if ($.isFunction(item)) {
						controller_def[k] = $.proxy(item, controller);
					} else {
						controller_def[k] = item;
					}
				});

				WYSIRWYG.controllers[definition.name] = controller;

				Templater.loadView(definition.template + '/template.html', function(view) {
					// change view.getData method just to set its data.__proto__
					var view_get_data = view.getData;

					view.getData = function() {
						var data = view_get_data.apply(this, arguments);
						data.__proto__ = controller_def;
						return data;
					}

					controller.view = view;
					controller_def.onInit && controller_def.onInit();
					view.events.once('render', function() {
						controller_def.onRender && controller_def.onRender();
					});
					controller.events.trigger('load template');
				});

			}
		}
	});

	function WYSIRWYG() {}

	// scope for Controllers
	var Controller = (function($, Templater, Events, ObserverCore) {
		"use strict";

		function Controller(definition) {
			this.definition = definition;
			this.model = new ObserverCore();
			this.events = new Events([
				'load template'
			]);

			constructor.apply(this, []);
		}

		function constructor() {

		}

		return Controller;
		
	})($, Templater, Events, ObserverCore);


	window.WYSIRWYG = WYSIRWYG;
	console.log('access controllers through WYSIRWYG.controllers', WYSIRWYG.controllers);

})(jQuery, Templater, Events, ObserverCore);