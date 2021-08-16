<template>
	<header>
		<nav>
			<ul>
				<a href="http://localhost:4200/employees">List Employees</a>
			</ul>
		</nav>
		<h1>{{ title }}</h1>
		<Button label="Add new Employee" color="green" />
	</header>
</template>

<script>
import Button from "./Button";
export default {
	name: "Header",
	props: {
		title: String
	},
	components: {
		Button
	}
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}
</style>

// route to angular app list employee http://localhost:4200/employees
