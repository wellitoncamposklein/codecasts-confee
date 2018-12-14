<template>
  <div>
    <header class="page-header row">
      <h3>Confee</h3>
    </header>
    <Login />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Login from './Forms/Login'
  export default {
    name: 'Auth',
    components: { Login },
    computed: {
      ...mapGetters(['isLogged'])
    }
  }
</script>
