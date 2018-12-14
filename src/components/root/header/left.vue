<template>
  <ul class="nav navbar-nav">
    <router-link :to="{ name: 'dashboard.main' }" tag="li" exact>
      <a>Início</a>
    </router-link>
    <router-link to="/auth" tag="li">
      <a>Entrar</a>
    </router-link>
  </ul>
</template>

<script>
  export default {
  }
</script>
