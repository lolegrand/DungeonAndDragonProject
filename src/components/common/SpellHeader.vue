<template>
  <div>
    <h1 style="text-align: center">This is a great header</h1>
    <div style="text-align: center">
      <router-link to="/">Configuration</router-link>
      <router-link to="/recherche">Recherche</router-link>
      <router-link to="/Statistiques">Statistiques</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpellHeader'
}
</script>

<style scoped>

</style>
