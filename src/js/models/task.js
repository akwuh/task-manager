import {Model} from 'backbone'

class Task extends Model {

	defaults() {
		return {state: 'waiting', name: 'New task'}
	}

	validate(attrs) {
		if (!attrs.name || !attrs.name.length)
			return 'Пожалуйста, введите название задачи'
	}

}

export default Task
