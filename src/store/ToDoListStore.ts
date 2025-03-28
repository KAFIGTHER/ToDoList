import { createStore } from 'vuex';

export interface IToDo {
    id: number;
    text: string;
    completed: boolean;
}

const store = createStore({
    state: {
        todos: [] as IToDo[],  // Array to hold the todos
    },
    mutations: {
        addTodo(state, todo: IToDo) {
            state.todos.push(todo);
        },
        removeTodo(state, id: number) {
            state.todos = state.todos.filter(todo =>  todo.id !== id );
        },
        toggleCompleted(state, {id, value}) {
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = value;
            }
        },
        setTodos(state, todos: IToDo[]) {
            state.todos = todos;
        },
    },
    actions: {
        addTodo({ commit }, todo: IToDo) {
            commit('addTodo', todo);
        },
        removeTodo({ commit }, id: number) {
            commit('removeTodo', id);
        },
        toggleCompleted({ commit }, {id, value} : {number, boolean}) {
            commit('toggleCompleted', {id, value});
        },
        fetchTodos({ commit }) {
            const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
            commit('setTodos', savedTodos);
        },
        saveTodos({ state }) {
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
    },
    getters: {
        allTodos(state) {
            return state.todos;
        },
        completedTodos(state) {
            return state.todos.filter(todo => todo.completed);
        },
        pendingTodos(state) {
            return state.todos.filter(todo => !todo.completed);
        },
    },
});

export default store;