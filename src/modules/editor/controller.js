;(function($, WYSIRWYG) {
	"use strict";

	WYSIRWYG.Controller.extend({
		name: 'ModuleEditor',
		template: 'modules/editor',
		
		onInit: function() {
			this.view.model.setData({
				instances: [5,8],
				widgets: [{
					type: 'Button',
					text: 'Botão'
				}, {
					type: 'ColorPicker',
					text: 'Color Picker'
				}],
				subcomponents: {
					"cmp-34533624": {
						type: 'Splitter',
						classes: [],
						config: {
							orientation: "horizontal",
							panes: [{
								collapsible: true,
								size: 200
							}, {

							}, {
								collapsible: true,
								size: 200
							}]
						}
					},

					"cmp-78866933": {
						type: 'PanelBar',
						classes: [],
						config: {

						}
					},

					"cmp-67236100": {
						type: 'PanelBar',
						classes: [],
						config: {

						}
					},

					"cmp-91528871": {
						type: 'ColorPicker',
						classes: [],
						config: {

						}
					},

					"cmp-33211243": {
						type: 'Button',
						classes: [],
						config: {

						}
					},

					"cmp-47009081": {
						type: 'DropDownList',
						classes: [],
						config: {
							dataTextField: "text",
							dataValueField: "value",
							dataSource: [
								{ value: "TreeDown", text: "Tree Down" },
								{ value: "TreeUp", text: "Tree Up" },
								{ value: "TreeLeft", text: "Tree Left" },
								{ value: "TreeRight", text: "Tree Right" },
								{ value: "RadialTree", text: "Radial Tree" },
								{ value: "TipOverTree", text: "Tip-Over Tree" },
								{ value: "LayeredHorizontal", text: "Layered Horizontal" },
								{ value: "LayeredVertical", text: "Layered Vertical" },
								{ value: "ForceDirected", text: "Force directed" },
								{ value: "MindmapVertical", text: "Mindmap Vertical" },
								{ value: "MindmapHorizontal", text: "Mindmap Horizontal" }
							]
						}
					}
				}
			});
		},

		onRender: function() {
			//console.log('controller view rendered');
		},

		addDefaultInstance: function(param) {
			var instances = this.view.model.getData('instances');
			instances.push(Math.random());
		},

		removeInstance: function(index) {
			var instances = this.view.model.getData('instances');
			instances.splice(index, 1);
		}
	});

})(jQuery, WYSIRWYG);