<template>
	<div>
		<h1>Hello Profile!</h1>
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
				let _this = this;
				//Event.$on('routerToggle', setTimeout(function()  {
					_this.$nprogress.done();
				//}, 1000));
			}
		}
	}
</script>