<template>
<b-modal v-bind:title="WareName" :visible="modalShow" hide-footer:="true" @hidden="closeModal">
   <template>
    <div class="table-responsive">
         <table class="table table-striped table-sm">
            <colgroup>
             <!--  <col span="1" style="width: 56%;">
               <col span="1" style="width: 22%;">
               <col span="1" style="width: 10%;">
               <col span="1" style="width: 12%;">-->
               <col span="1" style="width: 56%;">
               <col span="1" style="width: 22%;">
               <col span="1" style="width: 22%;">
            </colgroup>
            <tbody id="tbody">
             <!-- <th>
                <td>Наименование</td>
               <td>Магазин</td>
               <td>Остаток</td>
               <td>Цена</td>
              </th>-->
            <tr v-for="(item, index) in ware" v-bind:key="index">
            <!--   <td>{{item.Name}}</td>-->
               <td>{{item.Store}}</td>
               <td>{{item.Remain}} шт.</td>
               <td>{{item.Price}} руб.</td>
            </tr>
            </tbody>
         </table>
      </div>
   </template>
</b-modal>
</template>
<script>
export default {
   name: "WareInfo",
   model: {
        prop: 'item'
    },
   props: {
        item: {
        default: null,
    },
  },
  methods:{
     closeModal(){
        this.$store.state.modalShow = false;
     }
  },
   computed: {
      ware() {
         return this.$store.state.ware;
      },
   WareName(){
        if(this.$store.state.ware.length > 0)
           return this.$store.state.ware[0].Name;
        else
            return "";
      },
   modalShow(){
       return this.$store.state.modalShow;
    }
  }
}
</script>
<style scoped>
h5 {
   margin: 40px 0 0;
   color:white;
   }
   tr{
   color: #42b983;
   }
   .table-responsive{
   background-color: #3a4254;
   }
   table{
   width: 100%;  
   table-layout: fixed;
   word-wrap: break-word;
   }
   table td{
     text-align: left;
   /*border-bottom: 1px solid #dee2e6;*/
   border-right: 1px solid #4e4f50;
   /*text-align:left;
       LINE-BREAK: unset;*/
   }
   .table-sm td{
   padding:1px;
   font-size: 15.4px;
   }
</style>