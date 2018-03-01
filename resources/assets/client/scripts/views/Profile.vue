<template>
	<div class="profile">
		<section class="block block--full-page block--banner">
			<div class="block__overlay">
			</div>
		</section>
		<div class="small-12 small-centered medium-10 medium-centered columns">
			<section class="block block--intro" id="js-block--intro">
				<p class="block__meta">Perfil</p>
				<h2 class="block__title">Castellum é uma empresa de gestão de<br> activos, engenharia e consultoria.</h2>
				<p class="block__desc">Castellum é uma marca que tem uma acção de mercado nas áreas da construção, consultoria, fiscalização, desenvolvimento de projecto e gestão de activos imobiliários, numa vertente de High-End organizacional.</p>
				<p class="block__desc">Erguida sobre vetores de experiência, confiança e segurança, o Castellum desempenha um papel de resolução de necessidades, congregação de esforços e vontades, controlo de processos-chave e desencadeamento de operações numa perspectiva top-to-bottom.</p>
			</section>
		</div>
		<section class="block block--full-page block--team">
			<div class="block no-padding-top no-padding-bottom block--team__slider" id="js-block--team__slider">
				<div class="slider__content swiper-wrapper">
					<div class="swiper-slide slide-1">
						<p class="block__meta">Director Geral</p>
						<h2 class="block__title">Marcos Correia</h2>
						<p class="block__desc">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, orem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
					</div>
					<div class="swiper-slide slide-2">
						<p class="block__meta">Director Geral</p>
						<h2 class="block__title">Marcos Correia</h2>
						<p class="block__desc">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, orem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div class="slider__pagination">
					<div class="pagination__btn pagination__btn--prev" id="js-pagination__btn--prev">
						<svg height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
						    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
						    <path d="M0-.5h24v24H0z" fill="none"/>
						</svg>
					</div>
					<div class="pagination__btn pagination__btn--next" id="js-pagination__btn--next">
						<svg height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
						    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
						    <path d="M0-.25h24v24H0z" fill="none"/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Swiper from 'swiper';

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
			removeLoader() {
				let loader = document.getElementById('js-loader');
				loader.classList.remove('is--visible');
				loader.classList.add('is--hidden');
			},
			init() {
				let _this = this;
				//Event.$on('routerToggle', setTimeout(function()  {
					_this.$nprogress.done();
				//}, 1000));

				let slider = new Swiper('#js-block--team__slider', {
					slidesPerView: 1,
					spaceBetween: 0,
					grabCursor: true,
					loop: true,
					navigation: {
						prevEl: '#js-pagination__btn--prev',
					    nextEl: '#js-pagination__btn--next'
				  	},
				});

			}
		}
	}
</script>