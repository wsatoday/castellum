<template>
	<header class="main-header">
		<div class="large-12 large-centered columns">
			<div class="main-header__container">
				<div class="main-logo">
					<router-link class="" exact :to="'/'">
						<picture>
						  	<source media="(min-width: 64rem)" srcset="client/images/main-logo-100x100.png, client/images/main-logo-100x100.png 2x">
						  	<img src="client/images/main-logo-50x50.png" srcset="client/images/main-logo-100x100.png 2x" alt="Castellum">
						</picture>
					</router-link>
				</div>
				<nav class="main-navigation">
					<ul class="main-navigation__list">
						<li class="main-navigation__item">
							<router-link class="main-navigation__link" exact :to="'/perfil'">Perfil</router-link>
						</li>
						<li class="main-navigation__item">
							<router-link class="main-navigation__link" exact :to="'/perfil'">Portfolio</router-link>
						</li>
						<li class="main-navigation__item">
							<router-link class="main-navigation__link" exact :to="'/perfil'">Contactos</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
	export default {

		data() {
			return {

			}
		},

		mounted() {
			let _this = this;
			_this.init();
		},

		methods: {
			init() {
				console.log('hi');
			}
		}
	}
</script>