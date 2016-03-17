import _ from 'underscore'
import {ItemView} from 'backbone.marionette'
import taskTemplate from '../templates/task.js'

let TaskView = ItemView.extend({
	
	className: 'col-lg-4 col-xs-6',
	template: _.template(taskTemplate),
	events: {
		'click [data-action="state:waiting"]': function() {this.model.set('state', 'waiting')},
		'click [data-action="state:progress"]': function() {this.model.set('state', 'progress')},
		'click [data-action="state:done"]': function() {this.model.set('state', 'done')},
		'click [data-action="delete"]': function() {this.model.destroy()}
	},
	initialize() {
		this.listenTo(this.model, 'change', this.render)
		this.listenTo(this.model, 'destroy', this.remove)
	}

})

export default TaskView
