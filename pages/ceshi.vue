<template>
	<div>
		<p>
			<span class="px12">px12</span>
			<span class="rem12">rem12</span>
		</p>
		<p>
			<span class="px14">px14</span>
			<span class="rem14">rem14</span>
		</p>
		<p>
			<span class="px16">px16</span>
			<span class="rem16">rem16</span>
		</p>
        <div v-for="item of list">
            {{item.addr}}
        </div>
        <div style="color:red">
            {{postData.advanceCollection}}
        </div>
	</div>
</template>

<script>
export default {
    async asyncData (app) {
        let obj ={curToken:'059a60ca-e103-4797-851f-fd25fb1baddd'};
        let postObj = {
            currentPage: 1,
            pageSize: 10,
            createTimeStart: '2019-05-01',
            createTimeEnd: '2019-05-31',
            curToken: '059a60ca-e103-4797-851f-fd25fb1baddd',
        }
        let list =await app.$axios.get( `/zyhqAScenicTest/tscenic/findPopularTscenicList?${app.$Common.qs(obj)}` )
        let postData =await app.$axios.post( `/zyhqAScenicTest/tscenicStat/getStatisticsFinancial` ,postObj)
        return { 
            list: list.data.data ,
            postData:postData.data.data
        }
    },
	mounted() {
        // let postObj = {
        //     currentPage: 1,
        //     pageSize: 10,
        //     createTimeStart: '2019-05-01',
        //     createTimeEnd: '2019-05-31',
        //     curToken: '059a60ca-e103-4797-851f-fd25fb1baddd',
        // }
        // this.$axios.post( `/zyhqAScenicTest/tscenicStat/getStatisticsFinancial` ,postObj)
        // .then(res=>{
        //     console.log("mounted")
        //     console.log(res)
        // })
        // console.log(this.list)
	}
};
</script>

<style>
.px12 {
	font-size: 12px;
}
.px14 {
	font-size: 14px;
}
.px16 {
	font-size: 16px;
}
.rem12 {
	font-size: 0.24rem;
}
.rem14 {
	font-size: 0.28rem;
}
.rem16 {
	font-size: 0.32rem;
}
</style>
