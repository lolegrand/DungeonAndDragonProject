<template>
  <td>
    <input type="checkbox" @change="$emit('row-state-changed', $event.target.checked)" id="checkbox"/>
    Prendre en compte ?
  </td>
</template>

<script>
export default {
  name: 'ParamToggleSwitch',
  props: ['picked']
}
</script>

<style scoped>

</style>
