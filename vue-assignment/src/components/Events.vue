<template>
    <div >
        <h2><u>Events</u></h2>
        <button v-on:click="display">click</button>
        <h4>Add  10+20={{sum}}</h4>
        <h5>if you hover this it changes to black color</h5>
         <div v-bind:style = "styleobj" v-on:mouseover = "changebgcolor" v-on:mouseout = "originalcolor"></div>
         <h3><u>Event Modifiers</u></h3>
         <button v-on:click.once = "buttonclickedonce" v-bind:style = "styleobj1">Click Once</button>
         Output:{{clicknum}}
         <br/><br/>
         <button v-on:click = "buttonclicked"  v-bind:style = "styleobj1">Click Me</button>Output:{{clicknum1}}
         <br/>
         <h3><u>Event-key modifiers</u></h3>
          
              <input type = "text" v-on:keyup.enter = "showinputvalue" v-bind:style = "style" placeholder = "Enter your name"/>
         <h3> {{name}}</h3>
                 <hr id="hr">
    </div>
</template>
<script>
export default {
    data() {
        return {
               n1: 10,
               n2 : 20,
               sum : '',
               name: '',
               styleobj : {
                  width:"100%",
                  height:"10px",
                  backgroundColor:"red",
                  textalign:"center"
               },
               clicknum : 0,
               clicknum1 :0,
               style: {
                  width: "30%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  boxSizing: "border-box"
               }
               
        }
            },
            methods : {
               display : function(event) {
                  alert(event);
                  return this.sum =  this.n1+ this.n2;
               },
               changebgcolor : function() {
                  this.styleobj.backgroundColor = "black";
               },
               originalcolor : function() {
                  this.styleobj.backgroundColor = "red";
               },
               buttonclickedonce : function() {
                  this.clicknum++;
               },
               buttonclicked : function() {
                  this.clicknum1++;
               },
               showinputvalue : function(event) {
                  this.name=event.target.value;
               },
            },
}
</script>
<style scoped>
button{
    background-color: brown;
    width:200px;
}
#hr
{
    border: 0.2px solid black;
}
</style>