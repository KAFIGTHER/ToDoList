<script>
import { ref } from "vue";
export default {
  name: "TodoList",
  setup() {
    // Reactive variables
    const newTodo = ref("");
    const todos = ref([]);

    // Method to add a new task
    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push({ text: newTodo.value.trim(), completed: false });
        newTodo.value = ""; // Clear the input field
      }
    };

    // Method to remove a task
    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
    };
  },
};
</script>

<template>
  <div class="todo-app">
    <h1>My To-Do List</h1>
    <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        placeholder="Add a new task"
    />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input
            type="checkbox"
            v-model="todo.completed"
        />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
    <p v-if="todos.length === 0">No tasks yet! Add one to get started.</p>
  </div>

</template>

<style scoped>
.todo-app {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
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

li .completed {
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
}

button:hover {
  background-color: #d32f2f;
}
</style>