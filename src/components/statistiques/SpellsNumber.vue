<template>
  <div>
    <p>There are {{ spellsBookTitle.length }} books referenced</p>
    <p>There are {{ spellsArray.length }} spells referenced</p>
  </div>
</template>

<script>
export default {
  name: 'SpellsNumber',
  props: ['spellsArray', 'spellsBookTitle'],
  components: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
