<template>
	<div class="project-page">
		<section class="block block--full-page block--banner" :style="'background-image:url(/uploads/images/projects/'+ item.cover_photo + ')'">
			<div class="block__overlay">
				<div class="small-10 small-centered medium-10 medium-centered columns">
					<div class="title-wrapper">
						<p class="block__meta" v-text="item.meta"></p>
						<h1 class="block__title" v-text="item.title"></h1>
					</div>
				</div>
			</div>
			<div class="project-description--desktop">
				<p class="block__description" v-text="item.content"></p>
			</div>
			<div class="project-tecnical--desktop">
				<p class="block__description block__description--title">Dados Técnicos</p>
				<p class="block__description">Área: {{ item.area }}</p>
				<p class="block__description">Cliente: {{ item.cliente }}</p>
				<p class="block__description">Fase: {{ item.fase }}</p>
			</div>
			<div class="project-intervention--desktop">
				<p class="block__description block__description--title">Áreas de Intervenção</p>
				<p class="block__description">{{ item.area_intervencao }}</p>
			</div>
		</section>
		<section class="block project-gallery">
			<div class="project-description--mobile">
				<div class="small-10 small-centered columns">
					<p class="block__description" v-text="item.content"></p>
				</div>
			</div>
			<div class="project-tecnical--mobile">
				<div class="small-10 small-centered columns">
					<p class="block__description block__description--title">Dados Técnicos:</p>
					<p class="block__description">Área: {{ item.area }}</p>
					<p class="block__description">Cliente: {{ item.cliente }}</p>
					<p class="block__description">Fase: {{ item.fase }}</p>
				</div>
			</div>
			<div class="project-intervention--mobile">
				<div class="small-10 small-centered columns">
					<p class="block__description block__description--title">Áreas de Intervenção:</p>
					<p class="block__description">{{ item.area_intervencao }}</p>
				</div>
			</div>
			<div class="project-headline">
				<div class="small-10 small-centered medium-6 medium-centered columns">
					<div class="subtitle-wrapper">
						<h2 class="block__subtitle" v-text="item.headline"></h2>
					</div>
				</div>
			</div>
			<div class="project-thumb" v-for="(thumb, index) in thumbs" :key="thumb.id" :style="'background:url(/uploads/images/projects/'+ thumb.title + ')no-repeat center center / cover'">
				<div class="project-thumb__overlay"></div>
			</div>
		</section>
		<div class="related-projects-title-wrapper">
			<h3 class="block__subtitle">Projectos Relacionados</h3>
		</div>
		<div class="block no-padding-top no-padding-bottom block--related-projects__slider" id="js-related-projects__slider">
		    <div class="swiper-wrapper">
		        <router-link class="swiper-slide slide-1" v-for="(relatedItem, index) in relatedItems" :key="relatedItem.id" v-if="relatedItem.id !== item.id" :style="'background:url(/uploads/images/projects/'+ relatedItem.cover_photo + ')no-repeat center center / cover'" exact :to="'/portfolio/' + category + '/' + relatedItem.slug">
		        	<div class="slide__overlay">
		        		<div class="small-12 small-centered large-10 large-centered columns">
		        			<h3 class="slide__title" v-text="relatedItem.title"></h3>
		        			<p class="slide__meta" v-text="relatedItem.meta"></p>
		        		</div>
		        	</div>
		        	<div class="plus">
        				<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        					<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        					<path d="M0 0h24v24H0z" fill="none"/>
        				</svg>
        			</div>
		        </router-link>
		    </div>
		    <div class="slider-btn slider-btn--next" id="js-related-slider-btn--next">
		    	<p>Mais</p>
		    	<p class="slider-btn__icon">
		    		<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					    <path d="M22 12l-4-4v3H3v2h15v3z"/>
					    <path d="M0 0h24v24H0z" fill="none"/>
					</svg>
		    	</p>
		    </div>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper';

	export default {
		props: ['category', 'slug'],

		data() {
			return {
				item: {},
				thumbs: [],
				relatedItems: []
			}
		},
		metaInfo () {
			return {
				title: this.item.title + ' | Castellum - Asset Management, Engineering &amp; Consulting.'
			}
		},
		mounted() {
			let _this = this;
			_this.fetchData();
			setTimeout(() => {
				_this.fetchRelatedData();
			}, 200);
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				let _this = this;
				_this.item = {};
				_this.thumbs = [];
				axios.get('/api/projects/' + _this.$route.params.slug).then((response) => {
					_this.item = response.data;
					for(var i = 0; i < response.data.photos.length; i++) {
			  			_this.thumbs.push(response.data.photos[i]);
			  		}
				}).catch(function(error) {
					console.log(error);
			    });
			},
			fetchRelatedData() {
				let _this = this;
				console.log(_this.$route.params.category);
				_this.relatedItems = [];
				axios.get('/api/projects/categories/' + _this.$route.params.category).then((response) => {
					for(var i = 0; i < response.data.length; i++) {
			  			_this.relatedItems.push(response.data[i]);
			  		}
			  		setTimeout(() => {
			  			_this.loadSlider();
			  		}, 200);
				}).catch(function(error) {
					console.log(error);
			    });
			},
			loadSlider() {
				let _this = this;
				let slider = new Swiper('#js-related-projects__slider', {
					slidesPerView: 'auto',
					spaceBetween: 0,
					grabCursor: false,
					loop: true,
					navigation: {
					    nextEl: '#js-related-slider-btn--next'
				  	},
				});
			}
		}
	}
</script>