import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ffffff',
                secondary: '#4DB6AC',
                accent: '#e67e22',
            },
            dark: {
                primary: '#ffffff',
                secondary: '#4DB6AC',
                accent: '#e67e22',
            }
        },
    },
});
