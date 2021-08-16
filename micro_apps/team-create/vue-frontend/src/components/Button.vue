<template>
	<button v-on:click="onClick()" :style="{ background: color }" class="btn">
		{{ label }}
	</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		label: String,
		color: String
	},
	methods: {
		onClick() {
			console.log("clicked");
		}
	}
};
</script>
<style scoped>
.btn {
	color: white;
}
</style>
