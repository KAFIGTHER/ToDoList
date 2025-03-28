<script lang="ts">
import ListItem from "@/components/ExtendableList/ListItem.vue";
import ExtendableList from "@/components/ExtendableList/ExtendableList.vue";
export default {
  name: "TodoList",
  components: {
    ListItem,
    ExtendableList
  },
  setup() {
  },
  computed: {
    todos() {
      return this.$store.getters.allTodos;
    },
  },
  methods: {
    addTodo(newTodoText: String) {

      if (newTodoText.trim()) {
        const newTodo = {
          id: Date.now(),
          text: newTodoText.trim(),
          completed: false,
        };
        this.$store.dispatch('addTodo', newTodo);
        this.$store.dispatch('saveTodos')
      }
    },
    removeTodo(index: number) {
      this.$store.dispatch('removeTodo', index);
      this.$store.dispatch('saveTodos')
    },
    toggleCompleted(id: number, value: boolean) {
      if(id){
        this.$store.dispatch('toggleCompleted', {id, value});
        this.$store.dispatch('saveTodos')
      }

    },
  },
  created() {
    this.$store.dispatch('fetchTodos');
  },
};
</script>

<template>
  <div class="todo-app">
    <h1>Meine Aufgaben</h1>
    <ExtendableList
        :all-items="todos"
        :add-item="addTodo"
        :remove-item="removeTodo"
        :toggle-completed="toggleCompleted"
    />
  </div>

</template>

<style scoped>
.todo-app {
  font-family: Arial, sans-serif;
  max-width: 80vw;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #3a3e41;
  border-radius: 8px;
  background-color: #282c2d;
  margin-bottom: 20px;
}
</style>