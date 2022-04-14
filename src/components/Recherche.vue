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
      spellsInfo: this.computeConfiguredSpells(),
      search: ''
    }
  },
  methods: {
    computeConfiguredSpells () {
      let filteredSpellList = sortTable
      if (localStorage.getItem('ecoles')) {
        filteredSpellList = filteredSpellList.filter(
          (spell) => spell[2] === JSON.parse(localStorage.getItem('ecoles')))
      }
      if (localStorage.getItem('branches')) {
        filteredSpellList = filteredSpellList.filter(
          (spell) => spell[3].includes(JSON.parse(localStorage.getItem('branches'))))
      }
      if (localStorage.getItem('classesAndDomains')) {
        filteredSpellList = filteredSpellList.filter((spell) => {
          for (let i of spell[4]) {
            if (i[0] === JSON.parse(localStorage.getItem('classesAndDomains'))) {
              return true
            }
          }
        })
      }
      if (localStorage.getItem('level')) {
        filteredSpellList = filteredSpellList.filter((spell) => {
          for (let i of spell[4]) {
            if (i[1] === parseInt(JSON.parse(localStorage.getItem('level')))) {
              return true
            }
          }
        })
      }
      if (localStorage.getItem('book')) {
        filteredSpellList = filteredSpellList.filter((spell) => JSON.parse(localStorage.getItem('book')).includes(spell[0]))
      }
      return filteredSpellList
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
