<template>
  <div id="app">
    <RootHeader></RootHeader>
    <div class="container">
      <header class="page-header row">
        <h3>Olá</h3>
      </header>
    </div>
  </div>
</template>

<script>
  import RootHeader from './components/root/header.vue'

  export default {
    components: { RootHeader }
  }
</script>

<style src="assets/sass/app.scss" lang="sass"></style>
