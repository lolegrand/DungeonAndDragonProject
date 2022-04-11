<template>
  <div>
    <h3 v-on:click=toggleDescription>{{ spellName }}</h3>
   <desc-spell-show :is-shown=displayDescriptionState :spells-info=spell />
 </div>
</template>

<script>
import DescSpellShow from './DescSpellShow'
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

</style>
