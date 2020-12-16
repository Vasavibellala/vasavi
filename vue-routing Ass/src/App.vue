<template>
  <div id="app">
    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/about'>About</router-link>
        <router-link to='/register'>Register</router-link>
        <router-link to='/apicall'>AxiosExample</router-link>
        
    </nav>
    <router-view />
  
    
  </div>
</template>

<script>

</script>
<style scoped>
nav
{
  background-color: aqua;
  padding:10px;
  text-align: center;
}
</style>