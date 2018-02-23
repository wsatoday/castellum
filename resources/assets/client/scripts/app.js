import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.component('app-header', require('./components/Header.vue'));
Vue.component('app-footer', require('./components/Footer.vue'));

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
	root: '/',
	routes: routes
});

const app = new Vue({
	el: '#js-app',
	router
});

