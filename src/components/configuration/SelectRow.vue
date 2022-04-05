<template>
  <tr>
    <td>
      <p>{{listName}}</p>
    </td>
    <td>
      <select :disabled="!isActive">
        <option v-for="item in dataList" :key="item">{{item}}</option>
      </select>
    </td>
    <param-toggle-switch v-on:row-state-changed="isActive = $event"/>
  </tr>
</template>

<script>
import ParamToggleSwitch from './ParamToggleSwitch'
export default {
  name: 'SelectRow',
  components: {ParamToggleSwitch},
  props: ['listName', 'dataList'],
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>

</style>
