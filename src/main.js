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

// app.prototype.$constants = {
//    BASE_URL: process.env.BASE_URL,
//    API_URL: process.env.VUE_APP_API_URL,
//    IMG_PATH: 'src/assets/imgs/',
//    JS_PATH: 'public/js/',
//    CSS_PATH: 'src/assets/css/',
//    GLOBAL_JS_FILE_PATH: 'public/js/globalElementEvents.js',
// };



const app = createApp(App);

app.config.globalProperties.$ValidationTrigger = ValidationTrigger;


app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');