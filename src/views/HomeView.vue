<template>
   <div id="home">
      <div class="container">
         <!-- <img alt="Vue logo" :src="$store.getters['config/getImg']('logo.png')" class="w-fit mx-auto"> -->
         <!-- <img alt="Vue logo" src="/vue/src/assets/imgs/logo.png" class="w-fit mx-auto"> -->
         <img alt="Vue logo" src="@imgs/logo.png" class="w-fit mx-auto">
         <input type="text" class="form-control" v-model.lazy="testing" data-float-int>
         <h1>{{ $store.getters['config/getLang'] }}</h1>

         <h3>{{ testing }}</h3>

         <input type="search" class="form-control" :placeholder="$t('lang_search')">

         <ConfirmBtn
            @make-confirmation="getConfirmation"
            icon="error"
         />

         <div class="table-responsive my-2">
            <table class="table table-hover table-bordered table-primary">
               <thead class="bg-dark text-white">
                  <th>#</th>
                  <th>name</th>
                  <th>phone</th>
                  <th>delete</th>
               </thead>
               <tbody>
                  <tr v-for="(d , i) in drivers" :key="d.DId">
                     <td>{{ i + 1 }}</td>
                     <td>{{ d.DName }}</td>
                     <td>{{ d.DPhone }}</td>
                     <td>
                        <ConfirmBtn
                           @make-confirmation="getConfirmation"
                           @click="this.data_id = d.DId"
                           title="are you sure deleting driver ?"
                           icon="error"
                           main-btn-txt
                        />
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<script>
   import ConfirmBtn from '@/components/ConfirmBtn.vue';

   export default {
      name: 'HomeView',
      data() {
         return {
            drivers: [],
            confirmed: false,
            data_id: 0,
            testing: '',
         }
      },

      components: {
         ConfirmBtn
      },

      methods: {
         // async getData() {
         //    let data     = await shortFetch(API_URL + 'drivers');
         //    this.drivers = data;
         // },

         // async deleteData() {
         //    if (!this.confirmed) return;

         //    let data = await shortFetch(API_URL + 'drivers/delete_driver', false, 'application/json', JSON.stringify({id: this.data_id}), 'POST');
            
         //    if (data.ok) success('deleted successfully', true);
         //    this.getData();
         // },

         getConfirmation(isConfirmed) {
            this.confirmed = isConfirmed;
            // this.deleteData();
         },
      },

      created() {
      },
      mounted() {
         // this.getData();
      },
   }
</script>
