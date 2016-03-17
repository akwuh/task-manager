import _ from 'underscore'
import {CompositeView} from 'backbone.marionette'
import TaskView from './task'
import Task from '../models/task'
import template from '../templates/tasks.js'
import {escapeHtml} from '../utils/helper'

let TasksView = CompositeView.extend({

	template: _.template(template),
	childViewContainer: '#tasks',
	childView: TaskView,
	emptyView: false,
	ui: {
		'name': '[data-input="name"]',
		'error': '[data-role="error"]',
		'create': '[data-action="create"]'
	},
	events: {
		'click @ui.create': 'create'
	},

	create() {
		let name = escapeHtml(this.ui.name.val())
		let model = new Task({name: name})
		if (!model.isValid()) {
			this.ui.error.html(model.validationError)
		} else {
			this.ui.error.html('')
			this.ui.name.val('')
			this.collection.add(model)
		}
	}
})

export default TasksView
