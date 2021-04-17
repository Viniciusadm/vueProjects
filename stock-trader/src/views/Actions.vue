<template>
    <div id="actionsDiv">
        <div id="actions">
            <Action 
            v-for="company in companies" 
            :company="company.name" 
            :price="company.price"
            :key="company.name">
            </Action>
        </div>
    </div>
</template>

<script>
import Action from '../components/action';

export default {
    components: {
        Action
    },
    computed: {
        companies() {
            return this.$store.state.companies;
        }
    }
}
</script>

<style scoped>
    #actionsDiv {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }

    #actions {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>