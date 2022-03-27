<script setup lang="ts">
import { provide, ref } from "vue";
import data from "./data.json";
import test from "./packages/editor.jsx";
import { registerConfig as config } from "./utils/editor-config";
provide("config", config);
const state = ref(data);
</script>

<template>
	<div class="app">
		<test v-model="state" />
	</div>
</template>

<style lang="scss">
@import "@/assets/base.css";
.app {
	position: fixed;
	top: 20px;
	left: 20px;
	right: 20px;
	bottom: 20px;
}
</style>
