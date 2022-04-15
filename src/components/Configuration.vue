<template>
  <table>
    <select-row list-name="Search Ecoles:" :data-list=schoolList storage-id="ecoles"/>
    <select-row list-name="Search Branches:" :data-list=branchesList storage-id="branches"/>
    <select-row list-name="Search Classes & Domaines:" :data-list=classList storage-id="classesAndDomains"/>
    <select-row list-name="Search by niveau:" :data-list=spellLevelList storage-id="level"/>
    <pendulum   list-name="Search by Livre:" storage-id="book"/>
  </table>
</template>

<script>
import {SpellSchool, SpellClass, SpellLevel, SpellBranches} from '../assets/functions.js'
import SelectRow from './configuration/SelectRow'
import Pendulum from './configuration/Pendulum'

/**
 * Main component for the configuration page. It contains a table with all the option of to filter the spells.
 * The list of option are :
 *  - Spell school.
 *  - Spell class.
 *  - Spell level.
 *  - Spell Branches.
 *  - Spell book.
 * These filters are then stored to be used by the research page.
 * */
export default {
  name: 'Configuration',
  components: {Pendulum, SelectRow},
  data () {
    return {
      /* List of school. */
      schoolList: SpellSchool(),
      /* List of class. */
      classList: SpellClass(),
      /* List of spell level. */
      spellLevelList: SpellLevel(),
      /* List of branches. */
      branchesList: SpellBranches()
    }
  }
}
</script>

<style scoped>

td {
  text-align: center;
}

table {
  margin-right: auto;
  margin-left: auto;
}

</style>
