import Tasks from './collections/tasks'
import TasksView from './views/tasks'
import promise from 'es6-promise'

(()=>{
	promise.polyfill()
	document.body.querySelector('#container').appendChild(
		(new TasksView({collection: new Tasks})).render().el)
})()
