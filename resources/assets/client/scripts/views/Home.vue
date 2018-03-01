<template>
	<div class="home">
		<section class="block block--full-page block--banner">
			<div class="block__overlay">
				<h2 class="block__title">Castellum</h2>
				<h1 class="block__subtitle">Asset Management, Engineering &amp; Consulting</h1>
			</div>
		</section>
		<span class="scroll-arrow-arrow" @click="scrollDown" data-anchor="js-block--about">
			<svg class="arrow-down" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
			    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
			    <path d="M0-.75h24v24H0z" fill="none"/>
			</svg>
		</span>

		<section class="block block--about" id="js-block--about">
			<h2 class="block__title">360º</h2>
			<p class="block__subtitle">Da construção à gestão de imóveis, <br>um conjunto de desempenhos.</p>
			<router-link class="btn btn--hover-positive" exact :to="'/perfil'">
				<span>Mais</span>
			</router-link>
		</section>

		<section class="block no-padding-top no-padding-bottom block--projects">
			<div class="block no-padding-top no-padding-bottom block--projects__content">
				<h2 class="content__title"><span>Estamos presentes em várias industrias, em Portugal e no estrangeiro.</span>
					<router-link class="btn btn--hover-positive" exact :to="'/portfolio'">
						<span>Portfolio</span>
					</router-link>
				</h2>
				
			</div>
			<div class="block no-padding-top no-padding-bottom block--projects__slider" id="js-projects__slider">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide slide-1" v-for="(item, index) in items" :key="item.id" :style="'background:url(/client/images/'+ item.cover_photo + ')no-repeat center center / cover'">
			        	<div class="slide__overlay">
			        		<div class="small-12 small-centered large-10 large-centered columns">
			        			<h3 class="slide__title" v-text="item.title"></h3>
			        			<p class="slide__meta" v-text="item.meta"></p>
			        		</div>
			        	</div>
			        	<router-link class="plus" exact :to="'/portfolio/recent/' + item.slug">
	        				<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
	        					<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
	        					<path d="M0 0h24v24H0z" fill="none"/>
	        				</svg>
	        			</router-link>
			        </div>
			    </div>
			    <div class="slider-btn slider-btn--next" id="js-slider-btn--next">
			    	<p>Mais</p>
			    	<p class="slider-btn__icon">
			    		<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
						    <path d="M22 12l-4-4v3H3v2h15v3z"/>
						    <path d="M0 0h24v24H0z" fill="none"/>
						</svg>
			    	</p>
			    </div>
			</div>
		</section>
	</div>
</template>
<script>
	import Swiper from 'swiper';
	import scrollToSection from '../core/scrollToSection';

	export default {

		data() {
			return {
				items: []
			}
		},

		mounted() {
			let _this = this;
			_this.fetchData();
		},

		methods: {
			removeLoader() {
				let loader = document.getElementById('js-loader');
				loader.classList.remove('is--visible');
				loader.classList.add('is--hidden');
			},
			scrollDown(e) {
				let anchorSection =  e.currentTarget.dataset.anchor;
				scrollToSection(document.getElementById(anchorSection), document.getElementById('js-main-header'));
			},
			fetchData() {
				let _this = this;
				axios.get('/api/projects/categories/recent.json').then((response) => {
					for(var i = 0; i < response.data.length; i++) {
			  			_this.items.push(response.data[i]);
			  		}
			  		setTimeout(() => {
			  			_this.loadSlider();
			  		}, 200);
				}).catch(function (error) {
			       console.log(error);
			    });
			},
			loadSlider() {
				let _this = this;
				let slider = new Swiper('#js-projects__slider', {
					slidesPerView: 'auto',
					spaceBetween: 0,
					grabCursor: false,
					loop: true,
					navigation: {
					    nextEl: '#js-slider-btn--next'
				  	},
				});
				setTimeout(function()  {
					_this.$nprogress.done();
				}, 1000);
			}
		}
	}
</script>