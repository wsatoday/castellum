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
				console.log('hi profile');
			}
		}
	}
</script>