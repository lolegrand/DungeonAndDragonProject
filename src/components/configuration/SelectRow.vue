<template>
  <tr>
    <td>
      <p>{{listName}}</p>
    </td>
    <td>
      <select :disabled="!isActive" v-model="selected">
        <option disabled selected value> select an option </option>
        <option v-for="item in dataList" :key="item">{{item}}</option>
      </select>
    </td>
    <param-toggle-switch v-on:row-state-changed="isActive = $event" :default-checked=isActive />
  </tr>
</template>

<script>
import ParamToggleSwitch from './ParamToggleSwitch'
import StorageMixin from './StorageMixin'

/**
 * This component represents a selection row that can be disabled by a subcomponent named 'param-toggle-switch'.
 * Is passed by properties to this component:
 *  - listName, a name to be display and to identify the row.
 *  - dataList, a list of data from which the user can do his selection.
 *  subcomponent 'param-toggle-switch'.
 */
export default {
  name: 'SelectRow',
  components: {ParamToggleSwitch},
  mixins: [StorageMixin],
  props: ['listName', 'dataList']
}
</script>

<style scoped>

select {
  text-align: center;
  width: 100%;
  display: inline-block;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 2px rgb(204, 204, 204);
  transition: all .5s ease;
  position: relative;
  font-size: 14px;
  color: #474747;
  height: 100%;
}

</style>
