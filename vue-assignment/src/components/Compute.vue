<template>
    <div>
        <h3><u>computed property and watch property</u></h3>
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
  <div >
   <h4>Watch property</h4>
   <p>Add: {{num}}</p>
   <button  @click="increaseCounter">Increase by 2  </button>
   <hr id="hr">
</div>
 

</div>
</template>
<script>
export default {
    data () {
        return {
        message:'computed',
        num:0
        }
    },
    computed: {
  
    reversedMessage: function () {
      
      return this.message.split('').reverse().join('')
    }
  },
  watch : {
      num(val)
      {
          if(val>20)
          {
              this.num=0;
          }
      }
  },
   methods : {
       increaseCounter () {
           this.num += 2;
       }

}
}
</script>
<style scoped>
h3 {
    color:black;
}
button{
  background-color: #4CAF50;
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
   border: 0.1px solid black;
}
</style>