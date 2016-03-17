import { Events } from 'backbone'
import _ from 'underscore'

class Storage {

    constructor(id) {
        if (!window.localStorage)
            throw new Error('The browser doesn\'t support localStorage')
        this.id = id
        this.storage = window.localStorage
        _.extend(this, Events)
        window.addEventListener('storage', () => { 
        	this.trigger('change') 
        })
    }

    name(key) {
        return `${this.id}-${key}`
    }

    serialize(value) {
        return JSON.stringify(value)
    }

    unserialize(value) {
        return JSON.parse(value)
    }

    get(key) {
        return this.unserialize(this.storage.getItem(this.name(key)))
    }

    set(key, value) {
        this.storage.setItem(this.name(key), this.serialize(value))
    }

}

export default Storage
