<template>
	<div id="disregard-that">
		<link
			href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
			rel="stylesheet"
		/>
		<!-- <router-view title="Disregard That" /> -->
		<Home />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import Home from "@/views/Home.vue";

	@Component({
		components: {
			Home
		},
		data() {
			return {
				title: "Disregard That"
			};
		}
	})
	export default class App extends Vue {}
</script>

<style lang="scss">
	* {
		font-family: "Montserrat", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow-x: hidden;
	}
	html {
		margin: 0;
		padding: 0;
		height: 100%;
	}
	body {
		margin: 0;
		padding: 0;
		height: 100%;
	}
	.space-flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.center-flex {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
	}

	#disregard-that {
		font-family: "Montserrat", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>