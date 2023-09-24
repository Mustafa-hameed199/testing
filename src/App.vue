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

   export default {
      name: 'app',
      components: {
         commonHtml,
         Nav
      },

      methods: {
         setLangCookie() {
            if (getCookie(LANG_COOKIE_NAME) !== null) return;
            setCookie(LANG_COOKIE_NAME, DEFAULT_LANG, 1000);
         },

         setDirection() {
            let lang      = getCookie(LANG_COOKIE_NAME);
            let link      = document.head.querySelector('[data-css]');
            let linkBsLtr = document.head.querySelector('[data-bootstrap-ltr]');
            let linkBsRtl = document.head.querySelector('[data-bootstrap-rtl]');

            let dir   = lang == 'ar' ? 'rtl' : 'ltr';

            // for css direction 
            link.href = `${this.$store.state.config.CSS_PATH}style-${dir}.css`;

            // for bootstrap direction 
            if (dir == 'rtl') {
               linkBsRtl.href = BS_CDN_RTL_CSS;
               linkBsLtr.href = '';
               
            } else {
               linkBsLtr.href = BS_CDN_LTR_CSS;
               linkBsRtl.href = '';
            } 
         }
      },

      created() {
         this.setLangCookie();
         this.setDirection();
         this.$watch(() => this.$store.state.config.language, (newValue, oldValue) => {
            let link   = document.head.querySelector('[data-css]');
            let linkBs = document.head.querySelector('[data-css-bootstrap]');

            // for css direction 
            let dir   = newValue == 'ar' ? 'rtl' : 'ltr';
            link.href = `${this.$store.state.config.CSS_PATH}style-${dir}.css`;

            // for bootstrap direction 
            if (dir == 'rtl') linkBs.href = `${this.$store.state.config.URL}vue/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css`;
         })
      },
   }
</script>

<style lang="scss">
   #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
   }
   
   nav {
      display: block;
      padding: 50px;
      text-align: center;

      a {
         font-weight: bold;
         color: #2c3e50;

         &.router-link-exact-active {
            color: #42b983;
         }
      }
   }

   .v-leave-to,
   .v-enter-from {
      transform: translateY(20px);
      opacity: 0;
   }

   .v-enter-active,
   .v-leave-active {
      // transition: .5s cubic-bezier(.04,.05,.15,1.59);
      transition: .5s ease;
   }
</style>
