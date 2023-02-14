new Vue({
    el: '#vue-app',
    data: {
        available: true,
        nearby: false,
    },
    methods: {
        // addToC: function () {
        //     return this.c + this.age;
        // },
        // addToD: function () {
        //     return this.d + this.age;
        // },

    },
    computed: {
        addToC: function () {
            console.log('addToC');
            return this.c + this.age;
        },
        addToD: function () {
            console.log('addToD');
            return this.d + this.age;
        }
    }
});      