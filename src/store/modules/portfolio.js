const state = {
  funds: 10000,
  portfolio: []
}

const getters = {
  portfolio(state, getters) {
    // update the stocks latest price and name in portfolio from stocks db
    return state.portfolio.map(stock => {
      let record = getters.stocks.find(item => item.id === stock.id)
      return {
        id: record.id,
        name: record.name,
        price: record.price,
        quantity: stock.quantity
      }
    })
  }
}

const actions = {
  buyStocks({commit}, payload) {
    commit('SET_PORTFOLIO', payload)
  },
  sellStock({commit}, payload) {
    commit('SELL_STOCK', payload)
  }
}

const mutations = {
  'SET_PORTFOLIO'(state, payload) {
    let record = state.portfolio.find(item => item.id === payload.id)
    if (record) {
      record.quantity += payload.quantity
    } else {
      state.portfolio.push({
        id: payload.id,
        quantity: payload.quantity
    })      
    }
    state.funds -= payload.quantity * payload.price
  },
  'SELL_STOCK'(state, payload) {
    let record = state.portfolio.find(item => item.id === payload.id)
    if (record) {
      record.quantity -= payload.quantity
      if (record.quantity <= 0) {
        let recordIndex = state.portfolio.findIndex(item => item.id === payload.id)
        state.portfolio.splice(recordIndex, 1)
      }
      state.funds += payload.quantity * payload.price
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}