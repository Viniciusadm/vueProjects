new Vue({
    el: "#app",
    data: {
        game: false,
        lifePlayer: 100,
        lifeMonster: 100,
        finish: '',
        logs: []
    },
    methods: {
        playGame() {
            this.game = true;
            this.lifePlayer = 100;
            this.lifeMonster = 100;
            this.finish = '';
            this.logs = []
        },
        attack() {
            this.hurt('lifePlayer', this.getNumber(1, 15), 'Monstro', 'Jogador');
            this.hurt('lifeMonster', this.getNumber(1, 10), 'Jogador', 'Monstro');
        },
        attackSpecial() {
            this.hurt('lifePlayer', this.getNumber(1, 15), 'Monstro', 'Jogador');
            this.hurt('lifeMonster', this.getNumber(1, 20), 'Jogador', 'Monstro');
        },
        heal() {
            this.hurt('lifePlayer', this.getNumber(1, 15), 'Monstro', 'Jogador');
            const heal = this.getNumber(1, 20);
            this.lifePlayer = Math.min(this.lifePlayer + heal, 100);
            this.log(`O jogador curou ${heal} de vida.`, 'Jogador');
        },
        quit() {
            this.game = false;
            this.lifePlayer = 100;
            this.lifeMonster = 100;
            this.finish = '';
            this.logs = []
        },
        getNumber(min, max) {
            return Math.trunc(Math.random() * (max - min) + min);
        },
        hurt(target, attack, attacker, attacked) {
            this[target] = Math.max(this[target] - attack, 0);
            this.log(`O ${attacker} atingiu o ${attacked} com ${attack}.`, attacker);
        },
        log(text, initiator) {
            this.logs.unshift({text, initiator});
        }
    },
    computed: {
        hasResult() {
            return this.lifePlayer === 0 || this.lifeMonster === 0;
        }
    },
    watch: {
        hasResult(value) {
            if (value) {
                this.game = false;
                this.lifePlayer === 0 ? this.finish = 'Você perdeu :(' : this.finish = 'Você ganhou :)';
            }
        }
    }
});