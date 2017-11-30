import Vue from 'vue'
import Router from 'vue-router'
// import components here
import Models from '../components/Models'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Models',
			component: Models,
		},
		{
			path: '/:model',
			name: 'Model',
			component: Model,
		},
		{
			path: '/:model/:id',
			name: 'ModelInstance',
			component: Model,
		},
	]
})
