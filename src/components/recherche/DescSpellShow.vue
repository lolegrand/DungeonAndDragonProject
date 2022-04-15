<template>
  <table v-show=isShown>
    <tr>
      <td><b>Livre :</b> {{spellBook}}</td>
      <td><b>Ecole :</b> {{ spellSchool }}</td>
      <td><b>Branche :</b> <span v-for="item in spellBranches" :key="item.id">{{ item }}</span></td>
    </tr>
    <tr>
      <td><b>Classe :</b> <span v-for="item in spellClasses" :key="item.id">{{item[0]}} ({{item[1]}}) </span></td>
      <td><b>Composante :</b> <span v-for="item in spellComposante" :key="item.id">{{ item }}</span></td>
      <td><b>Incantation :</b> {{ spellIncantation }}</td>
    </tr>
    <tr>
      <td><b>Portée :</b> {{spellRange}}</td>
      <td><b>Effect :</b> {{ spellEffect }}</td>
      <td><b>Durée :</b> {{ spellDuration }}</td>
    </tr>
    <tr>
      <td><b>Sauvegarde :</b> {{spellSavingDraw}}</td>
      <td><b>Résistance Magique :</b> {{ spellMagicResist }}</td>
      <td><b>Item :</b> {{ spellItemNeeded }}</td>
    </tr>
    <tr>
      <td colspan="3"><b>Description :</b><br> {{spellDescription}}</td>
    </tr>
  </table>
</template>

<script>
/**
 * This component is used to display the description of a spell.
 * The properties:
 *  - spellInfo hold all the data of a spell.
 *  - isShown define if this description should be display or not.
 */
export default {
  name: 'DescSpellShow',
  props: ['spellsInfo', 'isShown'],
  computed: {
    spellBook () {
      return this.spellsInfo[0]
    },
    spellSchool () {
      return this.spellsInfo[2]
    },
    spellBranches () {
      return this.spellsInfo[3]
    },
    spellClasses () {
      return this.spellsInfo[4]
    },
    spellComposante () {
      return this.spellsInfo[5]
    },
    spellIncantation  () {
      return this.spellsInfo[6]
    },
    spellRange () {
      return this.spellsInfo[7]
    },
    spellEffect () {
      return this.spellsInfo[8]
    },
    spellDuration () {
      return this.spellsInfo[9]
    },
    spellSavingDraw () {
      return this.spellsInfo[10]
    },
    spellMagicResist () {
      return this.spellsInfo[11]
    },
    spellDescription () {
      return this.spellsInfo[12]
    },
    spellItemNeeded () {
      return this.spellsInfo[13]
    }
  }
}
</script>

<style scoped>
* {
  background-color: #E0DDCF;
}

table {
  padding: 0.5rem 1rem;
}
td {
  width: 33%;
}
</style>
