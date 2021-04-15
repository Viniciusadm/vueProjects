<template>
    <div class="list">
        <ToDo @changeState="changeState"
        @deleteTodo="deleteTodo"
        v-for="(value, index) in list"
        :key="index"
        :todo="value.name"
        :state="value.state"
        :id="index">
        </ToDo>
    </div>
</template>

<script>
import ToDo from './to-do';

export default {
    components: {
        ToDo
    },
    props: {
        list: {
            type: Array
        }
    },
    methods: {
        changeState(object) {
            this.$emit('changeState', {id: object.id});
        },
        deleteTodo(object) {
            this.$emit('deleteTodo', {id: object.id});
        }
    }
}
</script>

<style scoped>
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>