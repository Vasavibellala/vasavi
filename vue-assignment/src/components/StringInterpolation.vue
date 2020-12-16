<template>
  <div class="skills">
    <h3><u>String Interpolation</u></h3>
    name:{{name}}
    <hr/>
    <h3><u>binding dynamic attributes</u></h3>
    <hr/>
    <h4><u>binding html attributes</u></h4>
   <a  v-bind:href = "hreflink" target = "_blank">Click Me </a> 
   <hr/>
   <h4><u>binding class</u></h4>  
   <b>if  {{isactive}} , background color is blue</b>
   <div v-bind:class = "{active:isactive}"><b>{{title}}</b></div>
   
   <b>if  {{isactive1}} , no background color </b>
   <div v-bind:class = "{active:isactive1}"><b>{{title}}</b></div>
   <hr id="hr">
   
   </div>
</template>

<script>
export default {
  name: 'vasavi',
  props: {
    name: String
  },
 data () {
   return {
  hreflink : "http://www.google.com",
  title : "CLASS BINDING",
   isactive : true,
   isactive1:false
   }
 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
            background: blue;
}
#hr
{
     border: 0.2px solid black;
}
</style>
