export default {
   getImg: (state) => (name) => {
      return state.IMG_PATH + name;
   },

   getLang: (state) => {
      return state.language;
   }
}