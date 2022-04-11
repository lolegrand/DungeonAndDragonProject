<template>
  <table v-show=isShown>
    <tr v-for="item in spellsInfo" :key="item.id">{{item}}</tr>
  </table>
</template>

<script>

export default {
  name: 'DescSpellShow',
  props: ['spellsInfo', 'isShown']
}
</script>
