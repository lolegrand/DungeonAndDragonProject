<template>
  <div id="Recherche">
    <p>Recherche</p>
    <input type="text" v-model="search" placeholder="Spell name">
    <ul>
      <li v-for="spell in filteredSpells" :key="spell.id">
        <spell :spell=spell />
      </li>
    </ul>
  </div>
</template>

<script>
import {sortTable} from '../assets/data.min'
import Spell from './recherche/Spell'

export default {
  name: 'Recherche',
  components: {Spell},
  data () {
    return {
      spellsInfo: sortTable,
      search: ''
    }
  },
  computed: {
    filteredSpells () {
      return this.spellsInfo.filter((spell) => {
        return spell[1].toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>
