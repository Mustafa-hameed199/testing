<template>
   <Nav />
   <transition>
      <router-view/>
   </transition>
   <common-html/>
</template>


<script>
   import commonHtml from './components/CommonHtml.vue';
   import Nav from './components/Navbar.vue';
   import router from './router';
   
   export default {
      name: 'app',
      components: {
         commonHtml,
         Nav
      },

      data() {
         return {
         }
      },

      methods: {
         setLangCookie() {
            if (getCookie(LANG_COOKIE_NAME) !== null) return;
            setCookie(LANG_COOKIE_NAME, DEFAULT_LANG, 1000);
         },

         setLanguageStyle() {
            let lang      = getCookie(LANG_COOKIE_NAME);
            let link      = document.head.querySelector('[data-css]');
            let linkBsLtr = document.head.querySelector('[data-bootstrap-ltr]');
            let linkBsRtl = document.head.querySelector('[data-bootstrap-rtl]');

            let dir   = lang == 'ar' ? 'rtl' : 'ltr';
            // for css direction 
            link.href = `./css/style-${dir}.css`;

            // for bootstrap direction 
            if (dir == 'rtl') {
               linkBsRtl.href = BS_CDN_RTL_CSS;
               linkBsLtr.href = '';
               
            } else {
               linkBsLtr.href = BS_CDN_LTR_CSS;
               linkBsRtl.href = '';
            } 
         },

         setGlobalJsEvents() {
            // remove script if exists 
            if (el('[data-globalEvents-js]')) el('[data-globalEvents-js]').remove();
            
            // reload the script to get touch with elements events
            let scriptTag  = document.createElement('script');
            scriptTag.src  = GLOBAL_JS_FILE_PATH;
            scriptTag.setAttribute('defer', '');
            scriptTag.setAttribute('data-globalEvents-js', '');
            document.body.appendChild(scriptTag);
         }
      },

      created() {
         let obj = this;

         this.setLangCookie();
         this.setLanguageStyle();
         this.$watch(() => this.$store.state.config.language, (newValue, oldValue) => {
            obj.setLanguageStyle();
         });

         router.beforeEach((to, from, next) => {
            obj.setGlobalJsEvents();
            next();
         });
      },
   }
</script>

<style lang="scss">
   .v-leave-to,
   .v-enter-from {
      transform: translateY(20px);
      opacity: 0;
   }

   .v-enter-active,
   .v-leave-active {
      // transition: .3s cubic-bezier(.04,.05,.15,1.59);
      transition: .3s ease;
   }
</style>
