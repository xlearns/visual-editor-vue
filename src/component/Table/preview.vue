<template>
	<div class="table">
		<img
			src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.songma.com%2Fwenzhang%2F20190803%2F1puggk041fx95.jpg&refer=http%3A%2F%2Fimg.songma.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651038492&t=45d81450d3243c9c046f6060230f6883"
			alt=""
		/>
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	setup() {
		const tableData = [
			{
				date: "2016-05-03",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-02",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-04",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-01",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
		];
		return {
			tableData,
		};
	},
};
</script>
<style scoped>
.table {
	width: 100%;
	height: 94px;
}
img {
	width: 100%;
	height: 100%;
}
</style>
