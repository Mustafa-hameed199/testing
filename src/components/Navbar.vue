<template>
   <div class="container">
      <nav class="my-2" v-if="showNav">
         <router-link to="/">{{ $t('lang_home') }}</router-link> |
         <router-link to="/about">About</router-link> |
         <router-link to="/login">Login</router-link>
      </nav>

      <div>
         <h3 class="mb-2">{{ $t('lang_change_language') }}</h3>
         <div class="d-flex flex-column flex-wrap gpa-2">
            <div class="form-check">
               <label for="english">{{ $t('lang_english') }}</label>
               <input type="radio" 
                     class="form-check-input" 
                     value="en" 
                     name="language" 
                     id="english" 
                     :checked="$store.getters['config/getLang'] == 'en'"
                     @change="changeLang">
            </div>
      
            <div class="form-check">
               <label for="arabic">{{ $t('lang_arabic') }}</label>
               <input type="radio" 
                     class="form-check-input" 
                     value="ar" 
                     name="language" 
                     id="arabic" 
                     :checked="$store.getters['config/getLang'] == 'ar'"
                     @change="changeLang">
            </div>
         </div>
      </div>
      <!-- <select class="form-select" @change="changeLang">
         <option value="en" :selected="$store.getters['config/getLang'] == 'en'">english</option>
         <option value="ar" :selected="$store.getters['config/getLang'] == 'ar'">arabic</option>
      </select> -->
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
            // from cookies 
            setCookie(LANG_COOKIE_NAME, event.target.value, 1000);
            // from i18n 
            this.$i18n.locale = event.target.value;
            // from vuex 
            this.$store.dispatch('config/changeLang', event.target.value);
         }
      },

      watch: {
         $route() {
            this.showNav = this.$route.meta.showNav;
         },
      },
   }

</script>


<style lang="scss">
   nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px;
      text-align: center;

      a {
         display: block;
         font-weight: bold;
         color: #111;
         padding: 7px 10px;
         border-radius: 5px;
         transition: .3s ease;

         &:hover,
         &.router-link-exact-active {
            background-color: #42b983;
         }
      }
   }
</style>