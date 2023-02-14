new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        ageBrother: 30,
    },
    methods: {
        add: function () {
            this.ageBrother++;
        },
        subtract: function () {
            this.ageBrother--;
        }
    }
});      