<template>
  <div class="frame">
    <header><h2><slot name="header">Title</slot></h2></header>
    <h3>using slots</h3>
    <slot>This is the default content if nothing gets specified to go here</slot>
   
  </div>
  
</template>