<template>
	<header class="main-header" id="js-main-header">
		<div class="large-12 large-centered columns">
			<div class="main-header__container">
				<div class="main-logo">
					<router-link class="" exact :to="'/'">
						<picture>
						  	<source media="(min-width: 64rem)" srcset="/client/images/main-logo-70x70.png, /client/images/main-logo-100x100.png 2x">
						  	<img src="/client/images/main-logo-50x50.png" srcset="/client/images/main-logo-70x70.png 2x" alt="Castellum">
						</picture>
					</router-link>
				</div>
				<nav class="main-navigation">
					<ul class="main-navigation__list">
						<li class="main-navigation__item">
							<router-link class="main-navigation__link" exact :to="'/perfil'">Perfil</router-link>
						</li>
						<li class="main-navigation__item">
							<router-link class="main-navigation__link" exact :to="'/portfolio'">Portfolio</router-link>
						</li>
						<li class="main-navigation__item">
							<router-link class="main-navigation__link" exact :to="'/contactos'">Contactos</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
	import debounce from '../core/debounce';

	export default {
		props:[],

		data() {
			return {
				body: document.querySelector('body')
			}
		},

		mounted() {
			let _this = this;
			_this.animateOnScroll();
		},

		methods: {
			init() {
				
			},
			animateOnScroll() {
				let _this = this;
				const mainHeader = document.getElementById('js-main-header');
				window.addEventListener('scroll', debounce(function() {
					let st = window.pageYOffset || document.documentElement.scrollTop;
					(st > 1) ? mainHeader.classList.add('is--opaque') : mainHeader.classList.remove('is--opaque');
				}, 0));
			}
		}
	}
</script>