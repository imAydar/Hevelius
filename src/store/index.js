import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        rows: {},
        count: 10
    },
    getters:{
        getCount: state => {
            return state.count;
      }
    }
});