import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        ware: {},
        wares: {},
        count: 10,
        isCameraLoading: true,
        modalShow: false,
        showLoader: true
    },
    getters: {
        getCount: state => {
            return state.count;
        },
        isLoading: state => {
            return state.showLoader;
        },
        isCameraLoading: state => {
            return state.isCameraLoading;
        },
        getWares: state => {
            return state.wares;
        },
        getWare: state => {
            return state.ware;
        },
    },
    mutations: {
        setCurrentWare(state, data) {
            state.ware = data;
        },
        setCurrentWares(state, data) {
            state.wares = data;
        },
        showLoader(state, loading) {
            state.showLoader = loading;
        },
        showWareInfoModal(state, showModal) {
            state.showLoader = showModal;
        },
        isCameraLoading(state, loading) {
            state.isCameraLoading = loading
        }
    },
    actions: {
        getWareInfo(context, barcode) {
            console.log(barcode);
            context.commit('showLoader', true);
            fetch("https://api.mocki.io/v1/5bc16792")
                .then(r => {
                    return r.json();
                })
                .then(data => {
                    //alert(data[0]);
                    context.commit('setCurrentWare', data);
                    this.state.modalShow = true;
                })
                .finally(() => {
                    context.commit('showLoader', false);
                });
        },
        findWares(context, query) {
            console.log(query);
            context.commit('showLoader', true);
            fetch("https://api.mocki.io/v1/40846667")
                .then(r => {
                    return r.json();
                })
                .then(data => {
                    context.commit('setCurrentWares', data);
                })
                .finally(() => {
                    context.commit('showLoader', false);
                });
        },
        showLoader(context, loading) {
            context.commit('showLoader', loading);
        },
        isCameraLoading(context, loading) {
            context.commit('isCameraLoading', loading);
        }
    }
});