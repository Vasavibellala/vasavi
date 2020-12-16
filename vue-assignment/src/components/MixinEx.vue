<script>
    import { myMixin } from './myMixin.js'
    export default {
      mixins: [myMixin],
      created() {
       console.log('Hey from the component.')
      },
      methods: {
        hello() {
          console.log('Hello everyone.')
        }
      }

    }
    </script>