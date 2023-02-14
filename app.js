new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        ageBrother: 30,
        x: 0,
        y: 0
    },
    methods: {
        add: function () {
            this.ageBrother++;
        },
        subtract: function () {
            this.ageBrother--;
        },
        add10: function (inc) {
            this.ageBrother += inc;
        },
        subtract10: function (dec) {
            this.ageBrother -= dec;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
            console.log(this.x, this.y);
        }
    }
});      