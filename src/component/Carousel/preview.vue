<template>
	<div>
		<img
			src="https://t9.baidu.com/it/u=1088538323,3099587394&fm=218&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=9AA272230612A78C0C3111C20300A0B2&sec=1648573200&t=6862f3aa85de1594722e9fb6d25ff8af"
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
