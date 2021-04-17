<template>
    <div id="actionsDiv">
        <div id="actions">
            <Action 
            v-for="(quantity, company) in companies" 
            :company="company"
            :quantity="quantity"
            :key="company">
            </Action>
        </div>
    </div>
</template>

<script>
import Action from '../components/myAction';

export default {
    components: {
        Action
    },
    computed: {
        companies() {
            return this.$store.state.myActions;
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