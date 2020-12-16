<template>
    <div>
        <h3><u>style objects && class objects</u></h3>
        <h5>style</h5>
        <button v-on:click="fontSize++">
  Increase font size
</button>
<button v-on:click="fontSize--">
  Decrease font size
</button>

<p v-bind:style="{ fontSize: fontSize + 'px' }">
  Font size is: {{ fontSize }}
</p>
<p>class</p>
<div class="skills">
    <div class="holder">
      
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
      <div v-bind:class="{ alert: showAlert}"></div>

    </div>
  </div>
  <hr id="hr">
    </div>
   
</template>
<script>
export default {
    data() {
  return {
    fontSize: 10,
     skills: [
          { "skill": "full stack" },
          { "skill": "Frontend Developer" }
      ],
      showAlert: true  
    }
  
  
}
}
</script>
<style scoped>
h3 {
    color:black;
}
button{
  background-color: black;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  
  font-size: 16px;
 
  border-radius: 50%;
}
#hr
{
     border: 0.2px solid black;
}
</style>