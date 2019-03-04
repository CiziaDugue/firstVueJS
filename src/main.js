let bootstrap = require('bootstrap');

let Vue = require('vue');

let vueInstance = new Vue({
    el: '#app',
    data: {
        message: 'Hello world!!!!!!',
        description: 'Cet exemple illustre la puissance des <em>liaisons</em>',
        provider: 'Design Tech Académie',
        providerUrl: 'https://www.telecom-st-etienne.fr/formations/design-tech-academie-2/',
        subtitle: 'Découvrez les laisons avec VueJS'
    }
});
