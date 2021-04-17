<template>
    <div id="action">
        <div class="head">
            <h2>{{ company }}</h2>
            <p>(Preço: {{ priceComputed }})</p>
        </div>
        <div class="body">
            <p>Quantidade</p>
            <input type="number" v-model="quantity">
            <button @click="buy" :class="quantity > 0 ? 'enable' : 'disable'">Comprar</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity: 0
        }
    },
    props: {
        company: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    computed: {
        priceComputed() {
            return `R$ ${parseFloat(this.price).toFixed(2)}`.replace('.', ',')
        }
    },
    methods: {
        buy() {
            if (this.quantity > 0) {
                const price = this.quantity * this.price;
                const company = this.$props.company;
                if (price <= this.$store.state.sold) {
                    this.$store.commit('changeMoney', -price);
                    if (this.$store.state.myActions[company]) this.$store.state.myActions[company] += Number(this.quantity)
                    else this.$store.state.myActions[company] = Number(this.quantity)
                }
                this.quantity = 0;
            }
        }
    },
    watch: {
        quantity() {
            if (this.quantity < 0) this.quantity = 0;
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
        background-color: green;
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
        background-color: green;
        cursor: pointer;
    }

    .enable:hover {
        background-color: rgb(0, 148, 0);
    }
</style>