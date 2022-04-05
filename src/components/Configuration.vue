<template>
  <table>
    <select-row list-name="Search Ecoles:" :data-list=schoolList />
    <select-row list-name="Search Branches:" :data-list=branchesList />
    <select-row list-name="Search Classes & Domaines:" :data-list=classList />
    <select-row list-name="Search by niveau:" :data-list=spellLevelList />
  </table>
</template>

<script>
import {SpellSchool, SpellClass, SpellLevel, SpellBranches} from '../assets/functions.js'
import SelectRow from './configuration/SelectRow'
export default {
  name: 'Configuration',
  components: {SelectRow},
  data () {
    return {
      schoolList: SpellSchool(),
      classList: SpellClass(),
      spellLevelList: SpellLevel(),
      branchesList: SpellBranches()
    }
  }
}
</script>

<style scoped>

</style>
