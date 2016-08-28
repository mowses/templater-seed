;(function($, Templater) {
	"use strict";

	Templater.Directive.extend({
		name: 'wys-widget',

		onInit: function() {
			var self = this;
			var view = this.view;
			
			view.events.once('render', $.proxy(self.definition.onRender, self));

			return [view];
		},

		onRender: function() {
			var self = this;
			var $element = this.view.$element;
			var id = $element.attr('id');
			var view_data = this.view.getData();
			var widget = view_data.subcomponents[id];
			
			$element['kendo' + widget.type](widget.config);
		}
	});

})(jQuery, Templater);