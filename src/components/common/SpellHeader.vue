<template>
  <div class="parent">
    <h1>Dungeon and dragon project</h1>
    <div>
      <router-link tag="p" active-class="active" to="/" exact>Configuration</router-link>
      <router-link tag="p" active-class="active" to="/recherche" exact>Recherche</router-link>
      <router-link tag="p" active-class="active" to="/statistiques" exact>Statistiques</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpellHeader'
}
</script>

<style scoped>
* {
  background-color: transparent;
}

.parent {
  border-radius: 30px;
  background-color: #E0DDCF;
  position: sticky;
  top: 0;
}

h1 {
  text-align: center
}

div {
  text-align: center;
}

p {
  width: 100px;
  border: solid;
  display: inline-block;
  padding: 0 5px 0 5px ;
}

p:hover,
p.router-link-active,
p.router-link-exact-active {
  display: inline-block;
  background-color: indianred;
  cursor: pointer;
}

</style>
