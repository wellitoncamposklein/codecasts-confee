<script>
  import Left from './left'
  import Brand from './brand'
  import Right from './right'

  export default {
    name: 'confee-header',
    components: { Left, Brand, Right },
    data () {
      return { isOpen: false }
    },
    methods: {
      onToggleMenu () { this.isOpen = !this.isOpen }
    }
  }
</script>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <Brand @toggle="onToggleMenu" />
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" :class="{ in: isOpen }">
        <Left />
        <Right />
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
  </nav>
</template>
