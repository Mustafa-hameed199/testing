import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

// validation
import {ValidationTrigger} from './validation/ValidationTrigger';

// language 
import store from './store/store';
import i18n from './language/i18n';

// css
import './assets/css/style.css';



const app = createApp(App);

app.config.globalProperties.$ValidationTrigger = ValidationTrigger;

app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');