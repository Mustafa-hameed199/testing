import gettersMethods from './getters';
import mutationsMethods from './mutations';
import actionsMethods from './actions';

export default {
   namespaced : true,

   state() {
      return {
         counter: 0
      }
   },

   getters: gettersMethods,
   mutations: mutationsMethods,
   actions: actionsMethods
};