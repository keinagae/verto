import configManager from '@/util/ConfigManager'
import { Router } from '../../router'

export default function storeLoadedPlugin (store) {
  const whitelist = ['vweReplaceState']
  store.subscribe(async (mutation, state) => {
    if (whitelist.includes(mutation.type)) {
      sessionStorage.setItem('app_started', true)
      const routerLoaded = sessionStorage.getItem('router_loaded')
      if (routerLoaded == null) {
        return
      }
      if (localStorage.getItem('sync_data')) {
        Router.push({
          name: 'syncExtensionWallet'
        })
      } else {
        const lastRoute = localStorage.getItem('last_route') ? JSON.parse(localStorage.getItem('last_route')) : null
        if (lastRoute && Router.currentRoute.name !== lastRoute.name && lastRoute.name !== 'storesync') {
          Router.push({
            name: lastRoute.name,
            query: lastRoute.query,
            params: lastRoute.params
          })
        } else {
          if (state.currentwallet && state.currentwallet.loggedIn === true) {
            Router.push({
              path: '/verto/dashboard'
            })
          } else {
            const hasConfig = !!await configManager.hasVertoConfig()
            if (!hasConfig) {
              Router.push({
                name: 'setup',
                params: {
                  showConfigStep: true
                }
              })
            } else {
              Router.push({
                name: 'login'
              })
            }
          }
        }
      }
      document.querySelector('#preloader').style.display = 'none'
    }
  })
}
