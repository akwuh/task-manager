import Tasks from './collections/tasks'
import TasksView from './views/tasks'

(()=>{
	document.body.querySelector('#container').appendChild(
		(new TasksView({collection: new Tasks})).render().el)
})()
