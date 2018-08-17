import stock from '../../data/stocks'

const state = {
  stocks: []
}

const getters = {
  stocks: state => {
      return state.stocks
  }
}

const actions = {
  getStocksData({ commit }) {
    commit('SET_STOCKS', stock)
  },
  randomizeStockPrices({ state, commit }) {
    let newRecords = state.stocks.map(item => {
      return {
        id: item.id,
        name: item.name,
        price: parseInt(item.price * (1 + Math.random() - 0.5))
      }
    })
    commit('SET_STOCKS', newRecords)
  }
}

const mutations = {
  'SET_STOCKS'(state, payload) {
    state.stocks = payload
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}