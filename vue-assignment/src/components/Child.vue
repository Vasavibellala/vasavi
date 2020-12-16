<template>
    <div>
        <h4> In child component </h4>
       Message from parent component is {{ message }} 
       <h3> Child to Parent </h3>
       <p> Click button to send name to parent </p>
       <button @click="onClickMessage()"> Click Me </button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    props: {
        message: String,
    },
    data(){
        return{
            name: '',
        };
    },
    methods: {
        onClickMessage(){
            this.$emit('fullname', this.message )
        }
    }
}
</script>

<style>
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
</style>

