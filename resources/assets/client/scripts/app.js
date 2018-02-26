import Vue from 'vue';

import VueRouter from 'vue-router';

import NProgress from 'vue-nprogress';

window.Event = new Vue();

Vue.use(VueRouter);

Vue.component('app-header', require('./components/Header.vue'));
Vue.component('app-footer', require('./components/Footer.vue'));
Vue.component('progress-bar', require('./components/Progress-bar.vue'));

Vue.use(NProgress);

const nprogress = new NProgress({ parent: '.nprogress-container' });

const routes = [
	{
		path: '/',
		component: require('./views/Home')
	},
	{
		path: '/perfil',
		component: require('./views/Profile')
	}
];


const router = new VueRouter({
	mode: 'history',
	
	scrollBehavior (to, from, savedPosition) {
	  	if (savedPosition) {
		    	return savedPosition
	  	} else {
	    	return { x: 0, y: 0 }
	  	}
	},

	root: '/',

	routes: routes
});


router.afterEach((to, from) => {
  Event.$emit('routerToggle');
});


const app = new Vue({
	el: '#js-app',

	router,

	nprogress,

	mounted() {
	}

});

