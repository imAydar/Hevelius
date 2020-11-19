<template>
    <div class="WareList">

    
        
     <!--  <ul v-for="(item, index) in wares"
            v-bind:item="item"
            v-bind:index="index"
            v-bind:key="item.Name">
            <li >
                <div v-on:click="getWareInfo(item, $event)">{{item.Name}}</div>
            </li>
        </ul>-->
        
        <b-table  dark responsive :items="wares" @row-clicked="showDetails" style="word-wrap:break-word"></b-table>
                
    </div>
</template>

<script>
//import WareInfo from "./WareInfo.vue";
export default {
    data() {
      return {
        currentWare: null
      }
    },
    computed: {
      wares() {
         return this.$store.state.wares;
      },
    },
    methods: {
        getWareInfo(item){
            
            console.log(item);
            console.log(item.Barecode);
			fetch("https://api.mocki.io/v1/5bc16792")
				.then(r => {
					return r.json();
				})
				.then(data => {
                    this.$store.state.ware = data;
                  //  alert(data[0].Name);
                   // this.$store.state.modalShow = true;
				})
				.finally(() => {
					//this.load(false);
				});
        },
        showDetails(item) {
            this.currentWare = item;
            this.getWareInfo(item);
            this.$store.state.modalShow = true;
            //this.$store.state.modalShow = true;
        }
    },
    watch: {
        currentItem(value) {
            console.log("Current item is", value);
        }
    },
    components: {
     //   WareInfo
    }
}
</script>
<style scoped>
.WareList{
    background: wheat;
}
</style>