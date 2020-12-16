<script>
import merge from './merge.js'
export default {
   mixins: [merge],
  data: function () {
    return {
      response: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
   console.log(this.$data)
    
  }  
}
</script>
  