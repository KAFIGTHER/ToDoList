import './assets/main.css'

import { createApp } from 'vue'
import store from './store/ToDoListStore';
import App from './App.vue'

const app = createApp(App);
app.use(store);
app.mount('#app');
