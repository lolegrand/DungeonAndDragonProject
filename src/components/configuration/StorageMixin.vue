<script>
export default {
  data () {
    return {
      selected: '',
      isActive: false
    }
  },
  props: ['storageId'],
  mounted () {
    if (localStorage.getItem(this.storageId)) {
      this.isActive = localStorage.getItem(this.storageId)
      this.selected = JSON.parse(localStorage.getItem(this.storageId))
    }
  },
  watch: {
    selected (newSelected) {
      if (this.selected !== '') {
        localStorage.setItem(this.storageId, JSON.stringify(newSelected))
      }
    },
    isActive (newIsActive) {
      if (newIsActive === false) {
        this.selected = ''
        localStorage.removeItem(this.storageId)
      }
    }
  }
}
</script>
