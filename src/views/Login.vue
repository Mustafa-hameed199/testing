<template>
   <div id="login" class="login" :style="`background-image: url(${$store.getters['config/getImg']('login-bg.jpg')})`">
      <div class="container">
         <main class="main my-3">
            <img :src="$store.getters['config/getImg']('diamond.png')" @click="testing" class="mx-auto" alt="Diamond Icon">
            
            <h3 class="mb-3 text-center text-white">{{ $t('lang_company_name') }}</h3>
            
            <form  @submit.prevent="login">
               <div class="mb-2">
                  <label for="username" class="mb-1">{{ $t('lang_username') }}</label>
                  <input type="username" name="username" autofocus class="form-control" id="username" v-model="username">
               </div>
               <div class="mb-4">
                  <label for="password" class="mb-1">{{ $t('lang_password') }}</label>
                  <div class="show-pwd">
                     <i class="show-pwd-icon fa-solid fa-eye" data-show-pwd-icon></i>
                     <input type="password" name="password" class="form-control" id="password" v-model="password">
                  </div>
               </div>
               <button type="submit" name="submit" class="btn-main-clr py-2 text-white w-100">{{ $t('lang_login') }}</button>
            </form>
         </main>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'LoginView',
      data() {
         return {
            username: '',
            password: '',
            inputValidation: [
               {name: 'username', notEmpty: true},
               {name: 'password', notEmpty: true, showErrNextParent: true},
            ],
         }
      },

      methods: {
         async login() {
            const validation = new this.$ValidationTrigger();
            if (!validation.validating(this.inputValidation)) return;

            if (validation.customErr(this.username == 'admin', 'username', ['lang_name_already_exists'])) return;


            // let body = {
            //    username: this.username,
            //    password: this.password,
            // }

            // let data = await shortFetch(API_URL + 'login/login', false, 'application/json', JSON.stringify(body), 'POST');
            
            // if (customErr(data.error == 'wrong_username', 'username', 'wrong username')) return;
            // if (customErr(data.error == 'wrong_password', 'password', 'wrong username', true)) return;
            
            // success('you are logged !');
         },
      },
   };

</script>

<style scoped lang="scss">
   @use '@/assets/sass/helpers' as *;

   .login {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: relative;
      overflow: hidden;
      min-height: 100vh;

      &::before {
         content: '';
         position: absolute;
         inset: 0;
         width: 100%;
         height: 100%;
         background-color: rgba(black, .8);
      }

      .main {
         position: relative;
         z-index: 4;
         display: grid;
         justify-content: center;
         place-items: center;

         form {
            padding: 1rem;
            background-color: #eee;
            box-shadow: 0 rem(5) rem(5) rgba(black, .3);
            border-radius: rem(5);
            width: 100%;
         }

         img { 
            width: min(rem(200), 100%);
            @include brTo(sm) { width: min(rem(150), 50%) }
            animation: flying 2s ease-in-out alternate infinite;
         }
      }
   }
</style>