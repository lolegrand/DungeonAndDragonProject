<template>
  <td>
    <input type="checkbox" @change="$emit('row-state-changed', $event.target.checked)" id="checkbox"/>
    Prendre en compte ?
  </td>
</template>

<script>
export default {
  name: 'ParamToggleSwitch'
}
</script>

<style scoped>

</style>
