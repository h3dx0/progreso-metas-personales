import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    metasRezagadasCreadas: [],
    usuario: null,
    error: null,
    cargando: false
  },
  mutations: {
    crearMetaRezagada (state, payload) {
      state.metasRezagadasCreadas.push(payload)
    }
  },
  actions: {
    crearMetaRezagada ({commit, getters}, payload) {
      const metaRezagada = {
        titulo: payload.titulo,
        fechaFin: payload.fechaFin,
        descripcion: payload.descripcion
      }
      firebase.database().ref('metasRezagadas').push(metaRezagada)
        .then((data) => {
          commit('crearMetaRezagada', {
            ...metaRezagada
          })
        })
        .catch((error) => {
          console.log('Error al crear una meta rezagada' + error)
        })
    }
  }
})
