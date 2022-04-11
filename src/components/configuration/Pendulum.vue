<template>
  <tr>
    <td>
      <p>{{listName}}</p>
    </td>
    <td>
      <multi-data-select :disable="!isActive" name="Supprimer ->" :data-list=selected v-on:data-changed=fromLeftList />
      <multi-data-select :disable="!isActive" name="<- Ajouter"  :data-list=rightList v-on:data-changed=fromRightList />
    </td>
    <td>
      <param-toggle-switch v-on:row-state-changed="isActive = $event" :default-checked=isActive />
    </td>
  </tr>
</template>

<script>
import MultiDataSelect from './MultiDataSelect'
import ParamToggleSwitch from './ParamToggleSwitch'
import {SpellBookTitle} from '../../assets/functions'
import StorageMixin from './StorageMixin'

/**
 * This component represents a data pendulum in which a list of data can be placed on the a 'left array' or in a
 * 'right array'. Those data are firstly place in a select at the left. By selecting them and clicking the button
 * under the column they will be moved to the other column.
 * The columns are represented by the component 'multi-data-select'.
 * The property listName: is representing the name displayed to the user.
 * The data:
 *  - rightList, represent the data on the right side of the pendulum.
 * Note:
 * Because of the way data are managed in VueJs i had to fetch my data inside the component.
 */
export default {
  name: 'Pendulum',
  components: {ParamToggleSwitch, MultiDataSelect},
  props: ['listName', 'storageId'],
  mixins: [StorageMixin],
  data () {
    return {
      rightList: SpellBookTitle()
    }
  },
  methods: {
    /**
     * Method handling a data return from the right side of the pendulum.
     * @param event List of element selected on the right side of the pendulum. They need to be deleted from the right
     * side of the pendulum and added to the left side (if they are not present).
     */
    fromRightList (event) {
      this.rightList = this.rightList.filter(value => !event.includes(value))
      this.selected = [...this.selected, ...event].sort()
    },

    /**
     * Method handling a data return from the left side of the pendulum.
     * @param event List of element selected on the left side of the pendulum. They need to be deleted from the left
     * side of the pendulum and added to the right side.
     */
    fromLeftList (event) {
      this.selected = this.selected.filter(value => !event.includes(value))
      this.rightList = [...this.rightList, ...event].sort()
    }
  },
  watch: {
    isActive (newIsActive) {
      if (newIsActive === false) {
        this.rightList = SpellBookTitle()
      }
    }
  }
}
</script>

<style scoped>

</style>
