import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import News from '@/components/News'
import Person from '@/components/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'home',
		component: Home
    },
    {
    	path: '/movie',
    	name: 'movie',
    	component: Movie
    },
    {
    	path: '/news',
    	name: 'news',
    	component: News
    },
    {
    	path: '/person',
    	name: 'person',
    	component: Person
    }
  ]
})
