<template>
	<div class="echarts">
		<V-Echarts :options="getOption()" ref="dom" open></V-Echarts>
	</div>
</template>

<script>
import { ref } from "vue";
import VEcharts from "./../../packages/echarts.vue";
export default {
	components: {
		VEcharts,
	},
	setup() {
		let dom = ref();
		const getOption = function () {
			return {
				title: {
					text: "ECharts 入门示例",
				},
				tooltip: {},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
				},
				yAxis: {},
				series: [
					{
						name: "销量",
						type: "bar",
						data: [5, 20, 36, 10, 10, 20],
					},
				],
			};
		};
		return { ref, getOption };
	},
};
</script>
<style scoped>
.echarts {
	width: 200px;
	height: 200px;
}
</style>
