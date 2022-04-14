<template>
  <table v-show=isShown>
    <tr v-for="item in spellsInfo" :key="item.id">
      {{item}}
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
}
</script>
