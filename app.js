new Vue({
    el: '#vue-app',
    data: {
        name: 'Ahmed',
        job: 'Intern',
    },
    methods: {
        greet: function (time) {

            return 'Good ' + time + ' ' + this.name;
        }
    }
});     