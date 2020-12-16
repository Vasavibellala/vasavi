<template>
    <div class="hooks">
        <h1>life cycle hooks</h1>
		<p>
			msg:{{msg }}
		</p>
		
	</div>
</template>
<script>
export default {
    data () {
        return {
   msg : 'Hello World!'
        }
  
  },
    beforeCreate: function () { },
  created: function () { this.log('created'); },
  beforeMount: function () { this.log('beforeMount'); },
  mounted: function () { this.log('mounted'); },
 
   methods: {
    log: function (name) {
      let now = new Date();
      let msg = `${now} - ${name}`
      
      console.log(msg);
    }
  },
}
</script>
<style scoped>

</style>