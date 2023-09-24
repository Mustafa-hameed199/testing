import {createStore} from 'vuex';
import manageUserDataModule from './user/index';
import configurations from './config/index';


const store = createStore({
   modules: {
      manageUserData: manageUserDataModule,
      config: configurations,
   }
});

export default store;