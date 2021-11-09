import { createStore } from "vuex";
import coachesModule from './modules/coaches/index';
const store = createStore({
    modules:{
        coaches: coachesModule
    },
    state(){
        return{

        }
    }
});
export default store;