import Vue from 'vue'
import Vuex from 'vuex'

// we first import the module
import currentwallet from './currentwallet'
import highestVTXAccount from './highestVTXAccount'
import settings from './settings'
import wallets from './wallets'
import investment from './investment'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // then we reference it
    currentwallet,
    settings,
    wallets,
    highestVTXAccount,
    investment
  }
})

// if we want some HMR magic for it, we handle
// the hot update like below. Notice we guard this
// code with "process.env.DEV" -- so this doesn't
// get into our production build (and it shouldn't).
if (process.env.DEV && module.hot) {
  module.hot.accept(['./currentwallet', './settings'], () => {
    const newCurrentwallet = require('./currentwallet').default
    const newHighestVTXAccount = require('./highestVTXAccount').default
    const newSettings = require('./settings').default
    const newWallets = require('./wallets').default
    const investment = require('./investment').default
    store.hotUpdate({ modules: { investment:investment, currentwallet: newCurrentwallet, highestVTXAccount: newHighestVTXAccount, settings: newSettings, wallets: newWallets } })
  })
}

export default store
