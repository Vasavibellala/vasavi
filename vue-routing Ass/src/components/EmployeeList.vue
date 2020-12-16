<template>
    <div id="app">
        <h1>Employee List</h1>
        <table border="1px" align="center">
            <tr>
                <td>Name</td>
                <td>Salary</td>
                <td>Age</td>
            </tr>

             <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.employee_name}}</td>
                <td>{{item.employee_salary}}</td>
                <td>{{item.employee_age}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
   name:'EmployeeList' ,
   data()
   {
       return{
           list:undefined
       }
   },
   mounted()
   {
       Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
       .then((resp)=>{
           this.list=resp.data.data;
           console.log(resp.data.data)
       })
   }

}
</script>
<style scoped>
#app{
    text-align: center;
    background-color: grey;
}
</style>