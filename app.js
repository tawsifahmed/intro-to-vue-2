new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false,
        available1: false,
        nearby1: false,
    },
    methods: {


    },
    computed: {
        compClasses: function () {
            return {
                available: this.available1,
                nearby: this.nearby1
            }
        }
    }
});      