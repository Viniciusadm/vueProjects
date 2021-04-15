<template>
    <div class="divNewToDo">
        <input type="text" @keydown.enter="newTodo" placeholder="Nova tarefa?" v-model="name">
        <button @click="newTodo">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        newTodo() {
            if (this.name !== '') {
                this.$emit('NewTodo', {name: this.name});
                this.name = '';
            }
        }
    }
}
</script>

<style scoped>
    .divNewToDo {
        margin-bottom: 1rem;
    }

    .divNewToDo input {
        background-color: transparent;
        border: 1px solid white;
        padding: 0.9rem;
        font-size: 1.1rem;
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        outline: none;
        color: white;
    }

    .divNewToDo button {
        background-color: blue;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        border-left: none;
        padding: 0.9rem 1.1rem;
        font-size: 1.1rem;
        outline: none;
        color: white;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        cursor: pointer;
    }

    .divNewToDo button:hover {
        background-color: rgb(19, 19, 255);
    }
</style>