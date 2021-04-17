import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sold: 100000,
        companies: [
            {
                name: 'BMW',
                price: Math.floor(Math.random() * (200 - 50 + 1) + 50),
                min: 50,
                max: 200
            },
            {
                name: 'Google',
                price: Math.floor(Math.random() * (210 - 40 + 1) + 40),
                min: 40,
                max: 220
            },
            {
                name: 'Apple',
                price: Math.floor(Math.random() * (300 - 100 + 1) + 100),
                min: 100,
                max: 300
            },
            {
                name: 'Twitter',
                price: Math.floor(Math.random() * (200 - 1 + 1) + 1),
                min: 1,
                max: 200
            }
        ],
        myActions: {}
    },
    getters: {
        soldFormat(state) {
            const value = state.sold
            return `R$ ${parseFloat(value).toFixed(2)}`.replace('.', ',')
        }
    },
    mutations: {
        changeMoney(state, payload) {
            state.sold += payload
        },
        changeAction(state, payload) {
            state.myActions[payload.company] += payload.quantity
        }
    },
    actions: {

    },
    modules: {
        
    }
})
