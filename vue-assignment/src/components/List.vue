<template>
<div>
    <h3><u>vif,velse,vfor</u></h3>
   <div>
    <span v-if="seen">This is visible to you</span>  
    </div>
   
         <span style = "font-size:25px;"><b>it prints {{show}},goes to else condition</b></span>
      <h1 v-if = "show">This is h1 tag</h1>
         <h4 v-else>This is h4 tag</h4>
         <div id="app"> 
             <h4>v-for</h4>
            <p v-for="i in 5" :key="i">  numbers:{{i}} </p>
          
          <p v-for="(value, name, index) in object" :key="index">  <b> {{name}} </b>  {{value}} </p>
<hr id="hr">

        </div> 
  </div> 
</template>
<script>
export default {
    data () {
        return {
            seen:true,
         show:false,
         object: {
                firstname: 'Vasavi',
               lastname: 'bellala'
                
            }

        }
    }
}
</script>
<style>
h3 {
    color:black;
}
#hr
{
     border: 0.2px solid black;
}
</style>