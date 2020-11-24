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
import StreamBarcodeReader from "./StreamBarcodeReader.vue";
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
	/*mounted: function() {
	},*/
	methods: {
		onLoaded() {
			this.$store.dispatch('showLoader', false);
		},
		onDecode(barcode) {
			this.$store.dispatch('getWareInfo', barcode);
		},
		find(query){
			this.$store.dispatch('findWares', query);
		}
	},
	components: {
		StreamBarcodeReader,
		Loader,
		WareInfo,
		WaresInfo
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
