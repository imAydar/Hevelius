<template>
	<div class="hello">
		<Loader />
		<br>
		<WareInfo></WareInfo>
		
		<b-button v-on:click="useCamera=!useCamera">{{useCamera?'Скрыть камеру	':'Показать камеру	'}}<b-icon icon="camera" font-scale="1.4"/></b-button><br><br>
		<StreamBarcodeReader @decode="onDecode" @loaded="onLoaded" v-show="useCamera">
		</StreamBarcodeReader>
		<div v-if="!useCamera">
			<div class="inputHolder">
				<b-input placeholder="Введите запрос" type='text' v-model="searchPattern" v-on:keyup.enter="find(searchPattern)"> </b-input><br>
				<b-button class="findBtn" v-on:click="find(searchPattern)"><b-icon icon="search" font-scale="1.4"/></b-button><br><br>
			</div>
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
			this.WareName = result;
			fetch("https://192.168.200.110:9090/api/ware/" + result)
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
			if (stop) {
				this.$store.state.showLoader = stop;
			}
			else {
				this.$store.state.showLoader = stop;
			}
		},
		find(pattern){
			this.load(true);
			this.WareName = pattern;
			fetch("https://192.168.200.110:9090/api/find/" + pattern)
				.then(r => {
					return r.json();
				})
				.then(data => {
					//this.$store.state.rows = data;
					this.$store.state.wares = data;
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
.findBtn{
	height: 100%;
    margin-top: -0.7px;
	margin-left:2px;
}
.inputHolder{
	display:flex;
}
.scanner-container {
	background-color: #3a4254;
	/*height: 30px;*/
}
.modal-content{
	background-color: #3e444a;
	color:white;
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
