import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index.js';
import GoogleSignInPlugin from 'vue3-google-login';

const app = createApp(App);

app.use(router);

app.use(GoogleSignInPlugin, {
    clientId: '728942498795-j7msuq01gq7kgiits6ad9hub44srsuqr.apps.googleusercontent.com',
});

app.mount('#app');