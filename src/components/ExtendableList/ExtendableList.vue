<script lang="ts">
import { ref } from "vue";
import ListItem from "@/components/ExtendableList/ListItem.vue";
import {IToDo} from "@/store/ToDoListStore";

export default {
  name: "ExtendableList",
  components: {
    ListItem
  },
  props: {
    inputPlaceholder: {
      type: String,
      default: "Aufgabe hinzufügen",
      require: false
    },
    emptyListText: {
      type: String,
      default: 'Du hast noch keine Aufgaben! Jetzt welche hinzufügen.',
      require: false
    },
    allItems: {
      type: Array as IToDo,
      default: []
    },
    addItem: {
      type: Function,
      default: () => {}
    },
    removeItem: {
      type: Function,
      default: () => {}
    },
    toggleCompleted: {
      type: Function,
      default: () => {}
    },

  },
  setup(props) {
    const newItem = ref("");

    const handleAddItem = () => {
      if (newItem.value.trim()) {
        props.addItem( newItem.value.trim())
        newItem.value = "";
      }
    };

    const handleRemoveItem = (id:number) => {
      if(id){
        props.removeItem(id)
      }
    };

    return {
      newItem: newItem,
      handleAddItem,
      handleRemoveItem,
    };
  },
};
</script>

<template>
  <div class="extandable-list">
    <div class="add-wrapper">
      <input
          v-model="newItem"
          @keyup.enter="handleAddItem"
          type="text"
          :placeholder="$props.inputPlaceholder"
      />
      <button @click="handleAddItem()">Speichern</button>
    </div>

    <ul>
      <li v-for="(listItem, index) in allItems" :key="index">
        <ListItem :item="listItem" :on-checked-changed="$props.toggleCompleted" :on-delete="handleRemoveItem"/>
      </li>
    </ul>
    <p v-if="allItems.length === 0">{{$props.emptyListText}}}</p>
  </div>

</template>

<style scoped>

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #3a3e41;
  border-radius: 4px;
  background-color: #323739;
  color: #ffffff;
  text-decoration: none;
}

.add-wrapper{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}


button {
  background-color: #0095ff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
  height: 34px;
}

button:hover {
  background-color: #d32f2f;
}
</style>