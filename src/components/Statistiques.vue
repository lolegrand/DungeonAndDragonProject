<template>
  <div>
    <p>Statistiques</p>
    <spells-number :spells-array=dataTable :spells-book-title=booksTable />
  </div>
</template>

<script>
import SpellsNumber from './statistiques/SpellsNumber'
import {sortTable} from '../assets/data.min'
import {SpellBookTitle} from '../assets/functions'

export default {
  name: 'Statistiques',
  components: {SpellsNumber},
  data () {
    return {
      dataTable: sortTable,
      booksTable: SpellBookTitle()
    }
  },
  computed: {},
  methods: {}
}
</script>
