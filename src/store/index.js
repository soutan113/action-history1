import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * State
 * Vuexの状態
 */
const state = {
  /** 設定 */
  settings: {
    apiUrl: '',
    authToken: ''
  }
}

/**
 * Mutations
 * ActionsからStateを更新するときに呼ばれます
 */
const mutations = {
  /** 設定を保存します */
  saveSettings (state, { settings }) {
    state.settings = { ...settings }

    localStorage.setItem('settings', JSON.stringify(settings))
  },

  /** 設定を読み込みます */
  loadSettings (state) {
    const settings = JSON.parse(localStorage.getItem('settings'))
    if (settings) {
      state.settings = Object.assign(state.settings, settings)
    }
  }
}

/**
 * Actions
 * 画面から呼ばれ、Mutationをコミットします
 */
const actions = {
  /** 設定を保存します */
  saveSettings ({ commit }, { settings }) {
    commit('saveSettings', { settings })
  },

  /** 設定を読み込みます */
  loadSettings ({ commit }) {
    commit('loadSettings')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
