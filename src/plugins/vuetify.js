import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#D94F00',
                secondary: '#FFFFFF',
                accent: '#e67e22',
            },
            dark: {
                primary: '#FFFFFF',
                secondary: '#4DB6AC',
                accent: '#e67e22',
            }
        },
    },
});
