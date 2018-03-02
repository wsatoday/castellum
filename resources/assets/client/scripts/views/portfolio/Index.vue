<template>
	<div class="portfolio">
		<section class="block block--full-page block--banner">
			<div class="block__overlay">
			</div>
		</section>
		<div class="small-12 small-centered medium-10 medium-centered columns">
			<section class="block block--intro" id="js-block--intro">
				<p class="block__meta">Portfolio</p>
				<h2 class="block__title">A atuação Castellum abraça uma <br>série de sectores</h2>
				<p class="block__desc">Dentro do nosso universo de serviços chegamos à industria, à saúde, ao ramo hoteleiroou ao parque residencial, numa óptica multicultural de implementação, já que nos movemos em todo o globo cruzando os nossos serviços com as realidades locais.</p>
			</section>
		</div>
		<nav class="projects__filter">
			<ul>
				<li :class="{'is--active': isCatActive == 'hotelaria'}" @click="fetchByCat('hotelaria')">Hotelaria</li>
				<li :class="{'is--active': isCatActive == 'industria'}" @click="fetchByCat('industria')">Industria</li>
				<li :class="{'is--active': isCatActive == 'construcao'}" @click="fetchByCat('construcao')">Construção</li>
				<li :class="{'is--active': isCatActive == 'residencial'}" @click="fetchByCat('residencial')">Residencial</li>
			</ul>
		</nav>
		<section class="block--projects" v-if="!isEmptyList">
			<div class="mini-loader" v-if="isLoading">
			 	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 50 50;" xml:space="preserve">
				    <rect x="0" y="0" width="4" height="7" fill="#333">
				      <animateTransform  attributeType="xml"
				        attributeName="transform" type="scale"
				        values="1,1; 1,3; 1,1"
				        begin="0s" dur="0.6s" repeatCount="indefinite" />       
				    </rect>

				    <rect x="10" y="0" width="4" height="7" fill="#333">
				      <animateTransform  attributeType="xml"
				        attributeName="transform" type="scale"
				        values="1,1; 1,3; 1,1"
				        begin="0.2s" dur="0.6s" repeatCount="indefinite" />       
				    </rect>
				    <rect x="20" y="0" width="4" height="7" fill="#333">
				      <animateTransform  attributeType="xml"
				        attributeName="transform" type="scale"
				        values="1,1; 1,3; 1,1"
				        begin="0.4s" dur="0.6s" repeatCount="indefinite" />       
				    </rect>
			  	</svg>
			</div> 
			<div v-else class="project" v-for="(item, index) in items" :key="item.id" :style="'background:url(/uploads/images/projects/'+ item.cover_photo + ')no-repeat center center / cover'">
				<router-link class="project__overlay" exact :to="'/portfolio/' + category + '/' + item.slug">
					<div class="small-12 small-centered large-10 large-centered columns">
						<h3 class="project__title" v-text="item.title"></h3>
						<p class="project__meta" v-text="item.meta"></p>
					</div>
					<div class="plus">
						<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        					<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        					<path d="M0 0h24v24H0z" fill="none"/>
        				</svg>
					</div>
				</router-link>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				items 			: [],
				page 			: 1,
				isEmptyList		: false,
				isLoading  		: true,
				ismoreLoading	: false,
				category 		: 'all',
				isCatActive		: undefined
			}
		},
		metaInfo () {
			return {
				title: 'Portfolio | Castellum - Asset Management, Engineering &amp; Consulting.'
			}
		},
		mounted() {
			this.loadData();
		},	
		methods: {
			fetchByCat(cat) {
				let _this = this;
				_this.category = cat;
				_this.page = 1;
				_this.isCatActive = cat;
				_this.loadData();
			},
			loadData() {
				let _this = this;
				_this.isEmptyList = false;
				_this.isLoading = true;
				_this.items = [];
				_this.fetchData();
				
			},
			fetchData() {
				let _this = this;
				axios.get('/api/projects/categories/' + _this.category + '?page=' + _this.page).then((response) => {
					_this.page += 1;
					for(var i = 0; i < response.data.length; i++) {
			  			_this.items.push(response.data[i]);
			  		}
			  		_this.items.length == 0 ? _this.isEmptyList = true : _this.isEmptyList = false;
			  		setTimeout(() => {
			  			_this.isLoading = false;
			  		}, 200);
				}).catch(function (error) {
			       console.log(error);
			    });
			}
		}
	}
</script>