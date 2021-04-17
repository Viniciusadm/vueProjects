<template>
    <div id="home">
        <h1 class="title">Negocie e Consulte suas Ações</h1>
        <p class="destaque"><i class="fas fa-info-circle"></i> Clique em "Finalizar Dia" para iniciar um novo dia</p>
        <h1 class="sold">Seu saldo: {{ sold }}</h1>
    </div>
</template>

<script>
export default {
    computed: {
        sold() {
            return this.$store.getters.soldFormat
        }
    }
}
</script>

<style scoped>
    #home {
        margin: 2.5rem 8rem;
    }

    .title {
        font-weight: normal;
        font-size: 3.1rem;
        color: rgba(0, 0, 0, 0.9);
    }

    .sold {
        font-size: 2rem;
        color: rgba(0, 0, 0, 0.9);
    }

    .destaque {
        background-color: green;
        padding: 0.8rem;
        color: white;
        border-radius: 0.2rem;
        font-size: 1.1rem;
        margin: 1rem 0;
    }
</style>