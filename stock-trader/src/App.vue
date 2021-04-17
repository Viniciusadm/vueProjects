<template>
    <div id="app">
        <Menu />
        <router-view />
    </div>
</template>

<script>
import Menu from './components/menu'

export default {
    components: {
        Menu
    }
}
</script>

<style>

</style>
