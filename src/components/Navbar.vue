<template>
   <div class="container">
      <nav class="my-2" v-if="showNav">
         <router-link to="/">{{ $t('home') }}</router-link> |
         <router-link to="/about">About</router-link> |
         <router-link to="/login">Login</router-link>
      </nav>

      <select class="form-select" @change="changeLang($event)">
         <option value="en" :selected="$store.getters['config/getLang'] == 'en'">english</option>
         <option value="ar" :selected="$store.getters['config/getLang'] == 'ar'">arabic</option>
      </select>
   </div>

</template>

<script>

   export default {
      name: 'navbar',
      data() {
         return {
            showNav: true,
         }
      },
      methods: {
         changeLang(event) {
            this.$store.dispatch('config/changeLang', event.target.value);
            this.$i18n.locale = event.target.value;
            setCookie(LANG_COOKIE_NAME, event.target.value, 1000);
         }
      },

      watch: {
         $route() {
            this.showNav = this.$route.meta.showNav;
         },
      },
   }

</script>