<template>
    <div id="menu">
        <ul>
            <div class="guide">
                <router-link to="/" tag="li" active-class="active" exact>
                    <a>Início</a>
                </router-link>
                <router-link to="/portfolio" tag="li" active-class="active">
                    <a>Portfólio</a>
                </router-link>
                <router-link to="/actions" tag="li" active-class="active">
                    <a>Ações</a>
                </router-link>
            </div>
            <div class="details">
                <li @click="changePrices">Finalizar dia</li>
                <li class="sold">Saldo: {{ sold }}</li>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        sold() {
            return this.$store.getters.soldFormat
        },
        companies() {
            return this.$store.state.companies
        }
    },
    methods: {
        changePrices() {
            this.companies.forEach(company => {
                company.price = Math.floor(Math.random() * (company.max - company.min + 1) + company.min);
            });
        }
    }
}
</script>

<style scoped>
    .active {
        background-color: rgb(202, 202, 202);
    }

    ul {
        background-color: rgb(223, 223, 223);
        box-shadow: 0px 1px 16px 5px #000000;
        display: flex;
        justify-content: space-between;
    }

    .guide, .details {
        display: flex;
    }

    .sold {
        color: rgb(100, 100, 100);
        cursor: auto;
    }

    .sold:hover {
        background-color: rgb(223, 223, 223);
    }

    li {
        list-style: none;
        padding: 1.2rem;
        cursor: pointer;
        user-select: none;
        text-transform: uppercase;
        font-size: 0.8rem;
    }

    li:hover {
        background-color: rgb(202, 202, 202);
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>