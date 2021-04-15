<template>
    <div :class="state === true ? 'activated' : 'deactivated'" class="divTodo" @click="changeState(id)">
        <button @click.stop="deleteTodo(id)">X</button>
        <p class="todo">{{ todo }}</p>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        id: {
            required: true
        }
    },
    methods: {
        changeState(id) {
            this.$emit('changeState', {id});
        },
        deleteTodo(id) {
            this.$emit('deleteTodo', {id});
        }
    }
}
</script>

<style scoped>
    .divTodo {
        width: 12rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        height: 6rem;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        user-select: none;
    }

    .deactivated {
        text-decoration: line-through;
        background-color: rgb(211, 0, 0);
        border-left: 0.5rem solid rgb(104, 0, 0);
    }

    .deactivated button {
        background-color: rgb(104, 0, 0);
    }

    .activated {
        text-decoration: none;
        background-color: rgb(0, 150, 0);
        border-left: 0.5rem solid green;
    }

    .activated button {
        background-color: green;
    }

    .divTodo button {
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        padding: 0.3rem;
        font-size: 0.7rem;
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
        color: white;
        outline: none;
        z-index: 1;
    }

    .divTodo button:hover {
        background-color: rgb(0, 131, 0);
    }
</style>