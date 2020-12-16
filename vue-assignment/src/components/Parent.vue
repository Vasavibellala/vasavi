<template>
    <div id="myapp">
        <h3> Parent to Child </h3>
      
        <b-input type="text" placeholder="Name" name="name" id="name" v-model="name" @keyup.enter="message()"> </b-input>
        <Child :message="name" v-on:fullname="fullNameMethod" />
        <h4> In parent component </h4>
        <p> Message from child component is {{ fullName }} </p>
        <hr/>
    </div>
</template>

<script>
import Child from './Child.vue'

export default {
    name: 'Parent',
    data(){
        return{
            name: '',
            fullName: '',
        };
    },
    components: {
        Child,
    },
    methods: {
        fullNameMethod(data){
            this.fullName = data;
        }
    }
}
</script>

<style>
    #myapp{
    margin-left: 30%;
    margin-right: 30%;
}
</style>
