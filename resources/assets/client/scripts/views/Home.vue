<template>
	<div class="home">
		<section class="block block--full-page block--banner">
			<div class="block__overlay">
				<h2 class="block__title">Castellum</h2>
				<h1 class="block__subtitle">Asset Management, Engineering &amp; Consulting</h1>
			</div>
		</section>

		<section class="block block--about">
			<h2 class="block__title">360º</h2>
			<p class="block__subtitle">Da construção à gestão de imóveis, <br>um conjunto de desempenhos.</p>
		</section>
	</div>
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