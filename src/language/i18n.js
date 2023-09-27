import {createI18n} from 'vue-i18n';
import en from './langs/en.json';
import ar from './langs/ar.json';

const i18n = createI18n({
   locale: getCookie(LANG_COOKIE_NAME) || DEFAULT_LANG,
   fallbackLocale: DEFAULT_LANG,
   messages: {
      en,
      ar,
   }
});


export default i18n;