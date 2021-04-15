<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressBar :progress="progress" />
		<NewToDo @NewTodo="add" />
		<ToDoList v-if="list.length" :list="list" @changeState="changeState" @deleteTodo="deleteTodo" />
		<h2 v-else>Sua vida está em dia :)</h2>
	</div>
</template>

<script>
import ProgressBar from './components/progress-bar'
import NewToDo from './components/new-to-do.vue'
import ToDoList from './components/to-do-list.vue'
export default {
	data() {
		return {
			list: [],
		}
	},
	components: {
		ProgressBar,
		NewToDo,
		ToDoList
	},
	methods: {
        add(task) {
			this.list.push({
				name: task.name,
				state: true
			})
        },
		changeState(object) {
			const id = object.id;
			this.list[id].state = !this.list[id].state
		},
		deleteTodo(object) {
			const id = object.id;
			this.list.splice(id, 1);
		},
    },
	computed: {
		progress() {
			const tot = this.list.length;
			const activateds = this.list.filter(value => value.state === false).length
			return Math.round((activateds / tot) * 100) || 0;
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: white;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		font-weight: 300;
		font-size: 3rem;
		margin-bottom: 1rem;
	}
</style>
