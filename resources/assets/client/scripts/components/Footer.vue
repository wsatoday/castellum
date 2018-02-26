<template>
	<footer class="block main-footer">
		<p class="copyright">Castellum &copy; 2018. All rights reserved.</p>
	</footer>
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