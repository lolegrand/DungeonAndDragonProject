<template>
  <div>
    <h3 v-on:click=toggleDescription>{{ spellName }}</h3>
    <desc-spell-show :is-shown=displayDescriptionState :spells-info=spell />
  </div>
</template>

<script>
import DescSpellShow from './DescSpellShow'

/**
 * This component is used to display a spell and its description. The description of the spell can be hided by clicking
 * on the name of the spell.
 * The data:
 *  - displayDescriptionState hold the state of the description (displayed or hidden).
 * The method:
 *  - toggleDescription switch the state of the description.
 * The computed property:
 *  - spellName is used to extract the name of the spell from the array describing the spell.
 * The property:
 *  - spell hold all the data of a spell.
 */
export default {
  name: 'Spell',
  components: {DescSpellShow},
  props: ['spell'],
  data () {
    return {
      displayDescriptionState: false
    }
  },
  methods: {
    toggleDescription: function (event) {
      this.displayDescriptionState = !this.displayDescriptionState
    }
  },
  computed: {
    spellName: function () {
      return this.spell[1]
    }
  }
}
</script>

<style scoped>
div {
  background-color: #E0DDCF;
  border-radius: 10%;
}

h3 {
  text-align: center;
  padding: 1rem 0;
  background-color: #aaa89d;
}
</style>
