<template>
<div>Look at these nice models!
  <div v-for="model of models">{{ model.name }}</div>
</div>
</template>

<script>
export default {
	name: 'Models',
	data () {
		return {
			models: [
				{
					name: 'users'
				},
				{
					name: 'hosts'
				},
			],
		}
	}
}
</script>

<style scoped>
</style>
