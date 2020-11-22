<template>
<b-modal  v-bind:title="WareName" :visible="modalShow" hide-footer:="true" @hidden="closeModal">
   <template>
    <div class="table-responsive">
        <!-- <table class="table  table-sm">
            <colgroup>
               <col span="1" style="width: 56%;">
               <col span="1" style="width: 22%;">
               <col span="1" style="width: 22%;">
            </colgroup>
            <tbody id="tbody">
            <tr v-for="(item, index) in ware" v-bind:key="index">
               <td>{{item.Store}}</td>
               <td>{{item.Remain}} шт.</td>
               <td>{{item.Price}} руб.</td>
            </tr>
            </tbody>
         </table>-->
         <b-table class="text-left" thead-class="d-none"  striped  dark fixed :items="ware" :fields="fields">
            <template #table-colgroup="">
               <col span="#" style="width:40%">
               <col span="#" style="width:30%;">
               <col span="#" style="width:30%;">
            </template>
         </b-table>
      </div>
   </template>
</b-modal>
</template>
<script>
export default {
   name: "WareInfo",
   data(){
      return{
        fields: ['Store', 'Price', 'Remain']
      }
   },
  methods:{
     closeModal(){
        this.$store.state.modalShow = false;
     }
  },
   computed: {
      ware() {
         return this.$store.getters.getWare;
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
<style >
h5 {
   margin: 40px 0 0;
   color:white;
   }
   .table-responsive{
   background-color: #3a4254;
   }
   .modal-body{
      padding: 0.1rem!important;
   }
  /*.modal-body{
      padding: 0!important;
   }*/
   /*table{
   width: 100%;  
   table-layout: fixed;
   word-wrap: break-word;
   }
   table td{
     text-align: left;
   border-right: 1px solid #4e4f50;
   }
   .table-sm td{
   padding:1px;
   font-size: 15.4px;
   }*/
</style>