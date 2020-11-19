<template>
    <div class="WareList">

    
        
       <!--<ul v-for="(item, index) in wares"
            v-bind:item="item"
            v-bind:index="index"
            v-bind:key="item.Name">
            <li >
                <div v-on:click="getWareInfo(item, $event)">{{item.Name}}</div>
            </li>
        </ul>-->
        <WareInfo v-model="currentWare"></WareInfo>
        <b-table striped hover :items="wares" @row-clicked="showDetails"></b-table>
                
    </div>
</template>

<script>
import {WareInfo} from "./WareInfo.vue";
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
			fetch("https://utserver.pl:9090/api/Ware/" + item.Barecode)
				.then(r => {
					return r.json();
				})
				.then(data => {
                    this.$store.state.ware = data;
                  //  alert(data[0].Name);
                    this.this.$store.state.modalShow = true;
				})
				.finally(() => {
					//this.load(false);
				});
        },
        showDetails(item) {
            this.currentWare = item;
        }
    },
    watch: {
        currentItem(value) {
            console.log("Current item is", value);
        }
    },
    templates: {
        WareInfo
    }
}
</script>
<style scoped>
.WareList{
    background: wheat;
}
</style>