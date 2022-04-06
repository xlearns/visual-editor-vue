<template>
	<div>{{ key }} <el-input /></div>
</template>

<script>
import { reactive, watch, toRefs } from "vue";
export default {
	props: {
		data: Object | Array,
	},
	setup(props) {
		let state = reactive({
			key: null,
		});
		watch(
			() => props.data,
			() => {
				let { key } = props.data;
				state.key = key;
			},
			{
				deep: true,
			}
		);
		return {
			...toRefs(state),
		};
	},
};
</script>

<style></style>
