<template>
    <div id="action">
        <div class="head">
            <h2>{{ company }}</h2>
            <p>(Preço: {{ priceComputed }} / Quantidade: {{ quantity }})</p>
        </div>
        <div class="body">
            <p>Quantidade</p>
            <input type="number" v-model="quantitySell">
            <button @click="sell" :class="quantitySell > 0 ? 'enable' : 'disable'">Vender</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantitySell: 0
        }
    },
    props: {
        company: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    },
    computed: {
        price() {
            return this.$store.state.companies.filter(company => company.name === this.company)[0].price;
        },
        priceComputed() {
            return `R$ ${parseFloat(this.price).toFixed(2)}`.replace('.', ',')
        }
    },
    methods: {
        sell() {
            if (this.quantitySell > 0) {qqQ
                const price = this.quantitySell * this.price;
                const company = this.$props.company
                this.$store.commit('changeMoney', price);
                this.$store.commit('changeAction', { company, quantity: -this.quantitySell });
                const resto = this.$store.state.myActions[company]
                this.quantity = resto;
                this.quantitySell = 0;
                if (resto === 0) {
                    delete this.$store.state.myActions[company]
                }
            }
        }
    },
    watch: {
        quantitySell() {
            if (this.quantitySell < 0) this.quantitySell = 0;
            if (this.quantitySell > this.quantity) this.quantitySell = this.quantity;
        }
    }
}
</script>

<style scoped>
    #action {
        width: 25rem;
        margin-bottom: 1.5rem;
        margin-right: 1.5rem;
    }

    .head {
        display: flex;
        align-items: center;
        padding: 1rem 0.8rem;
        color: white;
        background-color: blue;
        border-top-right-radius: 0.2rem;
        border-top-left-radius: 0.2rem;
    }

    .head h2 {
        margin-right: 0.4rem;
    }

    .body {
        padding: 1rem;
        box-shadow: 0px 8px 9px -2px #000000;
    }

    .body p {
        margin-bottom: 0.6rem;
    }

    .body input {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.8);
        font-size: 1.1rem;
        width: 16rem;
        outline: none;
        padding-bottom: 0.2rem;
    }

    .body button {
        border: none;
        outline: none;
        padding: 0.6rem;
        border-radius: 0.2rem;
        margin-left: 1rem;
        color: white;
        font-size: 1.1rem;
    }

    .disable {
        background-color: grey;
        cursor: not-allowed;
        
    }

    .enable {
        background-color: blue;
        cursor: pointer;
    }

    .enable:hover {
        background-color: rgb(0, 0, 219);
    }
</style>