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
        
        <b-table class="text-left" striped dark responsive :items="wares" @row-clicked="showDetails" style="word-wrap:break-word"></b-table>
                
    </div>
</template>

<script>
//import WareInfo from "./WareInfo.vue";
export default {
    computed: {
      wares() {
         return this.$store.getters.getWares;
      },
    },
    methods: {
        showDetails(item) {
             this.$store.dispatch('getWareInfo', item.Barcode);
        }
    },
    watch: {
        currentItem(value) {
            console.log("Current item is", value);
        }
    }
}
</script>
<style scoped>
.WareList{
    background: wheat;
}
</style>