import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

// language 
import store from './store/store';
import i18n from './language/i18n';

// css
import './assets/css/style.css';


const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');