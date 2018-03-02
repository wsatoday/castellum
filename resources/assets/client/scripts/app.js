import anime from 'animejs';

import Vue from 'vue';

import VueRouter from 'vue-router';

import axios from 'axios';

import NProgress from 'vue-nprogress';

import VueMeta from 'vue-meta'

window.Event = new Vue();

window.axios = axios;

Vue.use(VueRouter);
Vue.use(VueMeta);

Vue.component('app-header', require('./components/Header.vue'));
Vue.component('app-footer', require('./components/Footer.vue'));
Vue.component('progress-bar', require('./components/Progress-bar.vue'));

Vue.use(NProgress);

const nprogress = new NProgress({ parent: '.nprogress-container' });

const routes = [
	{
		path: '/',
		component: require('./views/Home'),
		meta: {
			keepAlive: true
		} 
	},
	{
		path: '/perfil',
		component: require('./views/Profile'),
		meta: {
			keepAlive: true
		} 
	},
	{
		path: '/contactos',
		component: require('./views/Contact'),
		meta: {
			keepAlive: true
		} 
	},
	{
		path: '/portfolio',
		component: require('./views/portfolio/Index'),
		meta: {
			keepAlive: false
		} 
	},
	{
		path: '/portfolio/:category/:slug',
		component: require('./views/portfolio/Show'),
		props:true,
		meta: {
			keepAlive: false
		},
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


router.beforeEach((to, from, next) => {
	let loader = document.getElementById('js-loader');
	loader.style.opacity = 1;
	loader.classList.remove('is--hidden');
	loader.classList.add('is--visible');

	setTimeout(() => {
		next();
	}, 200);
});
router.afterEach((to, from) => {
 	Event.$emit('routerToggle');
 	let loader = document.getElementById('js-loader');
 	let timer = (loader.classList.contains('is--dark')) ? 1500 : 400;
 	setTimeout(() => {
		let animLoader = anime({
			targets: loader,
   			opacity: 0,
   			duration: 1000,
   			easing: 'linear'
		});
		animLoader.complete = function() {
			loader.classList.remove('is--visible');
			loader.classList.add('is--hidden');
			if (loader.classList.contains('is--dark')) {
				loader.classList.remove('is--dark');
			}
		};
 	}, timer)
});


const app = new Vue({
	el: '#js-app',

	router,

	nprogress,

	mounted() {
	}

});

