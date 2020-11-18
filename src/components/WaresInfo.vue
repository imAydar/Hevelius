<template>
<div>
    <h5>{{WareName}}</h5>
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
            <tr v-for="(item, index) in rows" v-bind:key="index">
            <!--   <td>{{item.Name}}</td>-->
               <td>{{item.Store}}</td>
               <td>{{item.Remain}} шт.</td>
               <td>{{item.Price}} руб.</td>
            </tr>
            </tbody>
         </table>
      </div>
</div>
</template>
<script>
export default {
    computed: {
    rows() {
      return this.$store.state.rows;
    },
    WareName(){
        if(this.$store.state.rows.length > 0)
           return this.$store.state.rows[0].Name;
        else
            return "";
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