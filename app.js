new Vue({
    el: '#vue-app',
    data: {
        c: "",
        d: "",
    },
    methods: {
        logName: function () {
            this.name
            console.log('You entered your name');
        },
        logAge: function () {
            console.log('You entered your age');
        }
    }
});      