<script lang="ts">
import {IToDo} from "@/store/ToDoListStore";

export default {
  name: "ListItem",
  props: {

    item: {
      type: Object as () => IToDo,
      default: '',
    },
    index: {
      type: Number,
    },
    onDelete: {
      type: Function,
      default: () => {}
    },
    onCheckedChanged: {
      type: Function,
      default: () => {}
    }
  },

  methods: {
    handleCheckboxToggle(value) {
      this.$props.onCheckedChanged(this.$props.item.id, value.target.checked)
    }
  }
};
</script>

<template>
  <div class="todo-item" :class="{ completed: $props.item.completed }">
    <input
        type="checkbox"
        v-model="$props.item.completed"
        :onchange="handleCheckboxToggle"
    />
    <span :class="{ completedText: $props.item.completed }" class="label">{{ $props.item.text }}</span>
    <button :key="$props.item.id" @click="onDelete(item.id)">Löschen</button>
  </div>
</template>

<style scoped>
.completedText {
  text-decoration: line-through;
  color: #888;
}
button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
  height: 34px;
}
button.completed{
  text-decoration: none !important;
}
.label{
  width: 25vw;
  text-align: left;
  overflow: auto;
  vertical-align: middle;
  margin: auto;
}

button:hover {
  background-color: #d32f2f;
}
.todo-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid #3a3e41;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  background-color: #323739;
}
.todo-item.completed{
  border: 1px solid #d32f2f;
}
</style>