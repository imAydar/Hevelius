<template>
	<div class="hello">
		<Loader />
		<WaresInfo></WaresInfo>
		<StreamBarcodeReader @decode="onDecode" @loaded="onLoaded">
		</StreamBarcodeReader>
	</div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import Loader from "./Loader.vue";
import WaresInfo from "./WaresInfo.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
	name: "HelloWorld",
	computed: {
		countt() {
			return this.$store.state.count;
		}
	},
	data() {
		return {
			rows: {},
			WareName: ""
		};
	},
	mounted: function() {
    this.load(true);
    alert("reloaded");
		//alert("as" + this.store.getters.getCount);
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
					this.$store.state.rows = data;
				})
				.finally(() => {
					this.load(false);
				});
		},
		load(stop) {
			//in case there'd be more code
			if (stop) document.getElementById("loader").style.display = "";
			else document.getElementById("loader").style.display = "none";
		}
	},
	components: {
		StreamBarcodeReader,
		Loader,
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
