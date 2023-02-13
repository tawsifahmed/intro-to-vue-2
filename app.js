new Vue({
    el: '#vue-app',
    data: {
        name: 'Ahmed',
        job: 'Intern',
        website: 'https://tawsifahmed.netlify.app/',
        github: 'https://github.com/tawsifahmed',
        websiteTag: '<a target="_blank" href="https://tawsifahmed.netlify.app/">My Website</a>'
    },
    methods: {
        greet: function (time) {

            return 'Good ' + time + ' ' + this.name;
        }
    }
});     