import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        ware: {},
        wares:{},
        count: 10,
        isCameraLoading: true,
        modalShow:false
    },
    getters:{
        getCount: state => {
            return state.count;
      }
    }
});