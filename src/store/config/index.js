import gettersMethods from './getters';
import mutationsMethods from './mutations';
import actionsMethods from './actions';

export default {
   namespaced : true,

   state() {
      return {
         URL: BASE_URL,
         API_URL: API_URL,
         language: getCookie(LANG_COOKIE_NAME) || DEFAULT_LANG, 
      }
   },

   getters: gettersMethods,
   mutations: mutationsMethods,
   actions: actionsMethods,
};