<template>
  <div id="Recherche">
    <p>Recherche</p>
    <input type="text" v-model="search" placeholder="Spell name">
    <ul id="SpellsList">
      <li v-for="data in filteredSpells" :key="data.id">{{ data }}</li>
    </ul>
  </div>
</template>

<script>
import {SpellName} from '../assets/functions.js'

export default {
  name: 'Recherche',
  data () {
    return {
      spellsList: SpellName(),
      search: ''
    }
  },
  computed: {
    filteredSpells () {
      return this.spellsList.filter((spell) => {
        return spell.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>
