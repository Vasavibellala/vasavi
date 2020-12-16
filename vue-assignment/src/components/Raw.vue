<template>
    <div>
        <h3><u>raw html</u></h3>
        <p> {{raw}}</p>
        <p>Using v-html directive: <span v-html="raw"></span></p>
        <h3><u>using javascript expressions</u></h3>
        <h1>{{ header ? header : 'welcome'}}</h1>
         <p>sum:{{ num + 10 }}</p>
         <div v-bind:title="firstName + ' ' + lastName">Hover to see my name</div>
         <hr id="hr">
       





    </div>
</template>
<script>
export default {
    data()
    {
        return{
            header:"",
           raw: "hello everyone",
           num:5,
           firstName:'vasavi',
               lastName:'bellala'
           
          
          

        }
    }
}
</script>
<style scoped>
p
{
    color:crimson;
}
h3 {
    color:black;
}
#hr
{
     border: 0.2px solid black;
}
</style>