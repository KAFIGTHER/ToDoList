<template>
  <div class="page-wrapper">
    <img class="logo" alt="Vue logo" src="./assets/logo.svg">
    <ToDoList/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToDoList from "@/components/ToDoList/ToDoList.vue";

export default defineComponent({
  name: 'App',
  components: {
    ToDoList
  }
});
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 40px;
  width: fit-content;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin: auto;
}
.logo{
  max-width: 200px;
  margin: auto;
}
</style>
