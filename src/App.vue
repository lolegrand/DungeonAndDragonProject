<template>
  <div id="app">
    <spell-header/>
    <router-view/>
    <spell-footer/>
  </div>
</template>

<script>
import SpellHeader from './components/common/SpellHeader'
import SpellFooter from './components/common/SpellFooter'
export default {
  name: 'App',
  components: {SpellFooter, SpellHeader}
}
</script>

<style>

* {
  background-color: #534b52;
  color: #000;
}

input {
  background-color: #E0DDCF;
}
</style>
