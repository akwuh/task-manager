import {Collection} from 'backbone'
import Task from '../models/task'
import Storage from '../utils/storage'
import config from '../config'

class Tasks extends Collection {
	
	initialize() {
		this.model = Task
		this.storage = new Storage(config.appKey)
		this.load()
		this.on('update change', () => {
			this.storage.set('tasks', this.toJSON())
		})
		this.listenTo(this.storage, 'change', this.load)
	}

	load() {
		new Promise((resolve, reject) => {
			let tasks = this.storage.get('tasks')
			resolve(Array.isArray(tasks) ? tasks : [])
		}).then((tasks) => {
			this.trigger('loaded')
			this.reset(tasks)
		})
	}

}

export default Tasks
