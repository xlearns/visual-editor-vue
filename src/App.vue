<template>
	<div class="app">
		<editor v-model="state"></editor>
	</div>
</template>

<script>
import {provide, ref} from 'vue'
import data from './data.json'
import Editor from './packages/editor.jsx'
import {registerConfig as config} from './utils/editor-config.jsx'
export default {
  name: 'App',
  components:{
	Editor
  },
  setup(){
	const state = ref(data)
	provide('config', config)
	return {
		state
	}
  }
}
</script>

<style lang="scss">
.app{
	position: fixed;
	top:20px;
	left:20px;
	right:20px;
	bottom:20px;
}
</style>
