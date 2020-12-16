<template>
  <div id="app">
    <StringInterpolation name="vasavi"/>
   <life/>
    <events/>
    <raw/>
    <compute/>
    <obj/>
    <list/>
    <parent/>
    <frame><img src="./assets/logo.png"></frame>
    <hr/>
    <div><h3>Dynamic components</h3></div>
    
    <div class="d-flex justify-content-center">
            <div @click="selectedComponent = 'DynamicOne'" class="p-2 m-2 btn btn-primary">One</div>
            <div @click="selectedComponent = 'DynamicTwo'" class="p-2 m-2 btn btn-primary">Two</div>
           
        </div>
        <div class="d-flex justify-content-center">
            <component :is="selectedComponent"></component>
        </div>
        <mixin-ex/>
        <merge/>
        
        
 
 

    
    
  </div>
</template>
    
   
 
<script>

import Events from './components/Events.vue'
import Life from './components/Life.vue'
import Raw from './components/Raw.vue'
import Compute from './components/Compute.vue'
import StringInterpolation from './components/StringInterpolation.vue'
import List from './components/List.vue'
import Obj from './components/Obj.vue'
import DynamicOne from './components/DynamicOne.vue';
    import DynamicTwo from './components/DynamicTwo.vue';
import Parent from './components/Parent.vue'
import Frame from './components/Frame.vue'
import MixinEx from './components/MixinEx.vue'
import Merge from './components/Merge.vue'






export default {
  name: 'App',
  components: {
   StringInterpolation,
    Events,
    Life,
    Raw,
    Compute,
    Obj,
    List,
Frame,
    Parent,
    DynamicOne,
    DynamicTwo,
    MixinEx,
    Merge,
 
   
 
    
    
  },
  data ()
  {
    return {
      selectedComponent: 'DynamicOne'
    }
  }
}
 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
