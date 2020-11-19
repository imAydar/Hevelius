<template>
	<div class="hello">
		<Loader />
		<br>
		<WareInfo></WareInfo>
		
		<b-button v-on:click="useCamera=!useCamera">{{useCamera?'Скрыть камеру':'Отобразить камеру'}}</b-button>
		<br>
		<StreamBarcodeReader @decode="onDecode" @loaded="onLoaded" v-show="useCamera">
		</StreamBarcodeReader>
		<div v-if="!useCamera">
			<input type='text' v-model="searchPattern" />
			<button v-on:click="find(searchPattern)">искать</button>
			<WaresInfo></WaresInfo>
		</div>
		
	</div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import Loader from "./Loader.vue";
import WareInfo from "./WareInfo.vue";
import WaresInfo from "./WaresInfo.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
	name: "HelloWorld",
	data: function() {
		return {
			useCamera:true,
			searchPattern:""
		}
	},
	mounted: function() {
		if(this.$store.state.isCameraLoading)
			this.load(true);
	},
	methods: {
		onLoaded() {
			this.load(false);
		},
		onDecode(result) {
			//let vm = this;
			this.load(true);
			this.WareName = "";
			fetch("https://utserver.pl:9090/api/Ware/" + result)
				.then(r => {
					return r.json();
				})
				.then(data => {
					this.$store.state.ware = data;
					this.$store.state.modalShow = true;
				})
				.finally(() => {
					this.load(false);
				});
		},
		load(stop) {
			//in case there'd be more code
			if (stop) document.getElementById("loader").style.display = "";
			else document.getElementById("loader").style.display = "none";
		},
		find(pattern){
			this.load(true);
			this.WareName = "";
			fetch("https://utserver.pl:9090/api/find/" + pattern)
				.then(r => {
					return r.json();
				})
				.then(data => {
					//this.$store.state.rows = data;
					this.$store.state.wares = data
				})
				.finally(() => {
					this.load(false);
				});
		}
	},
	components: {
		StreamBarcodeReader,
		Loader,
		WareInfo,
		WaresInfo
		// store
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.scanner-container {
	background-color: #3a4254;
	/*height: 30px;*/
}
body {
	background-color: #3a4254;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
