import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * State
 * Vuexの状態
 */
const state = {
  /** 家計簿データ */
    abData: {},
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
  /** 指定年月の家計簿データをセットします */
   setAbData (state, { yearMonth, list }) {
     state.abData[yearMonth] = list
   },

   /** データを追加します */
   addAbData (state, { item }) {
     const yearMonth = item.date.slice(0, 7)
     const list = state.abData[yearMonth]
     if (list) {
       list.push(item)
     }
   },
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
  /** 指定年月の家計簿データを取得します */
  fetchAbData ({ commit }, { yearMonth }) {
    // サンプルデータを初期値として入れる
    const list = [
      /** サンプルデータ */
      { date: `${yearMonth}-01`, temperature:38.7, memo: 'メモ' },
      { date: `${yearMonth}-02`, temperature:38.2, memo: 'メモ2' }
    ]
    commit('setAbData', { yearMonth, list })
  },

  /** データを追加します */
  addAbData ({ commit }, { item }) {
    commit('addAbData', { item })
  },

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
