import store from '../../../store'
import Lib from '@/util/walletlib'

export class BaseProvider {
  getTokenImage (chain, type) {
    if (type === 'tpls') type = 'eth'
    let image = Lib.getDefaultToken(chain)
    if (this.evm(chain) && store.state.tokens.evmTokens[chain]) {
      let token = store.state.tokens.evmTokens[chain].find(o => o.symbol && type && o.symbol.toLowerCase() === type.toLowerCase())
      if (token) image = token.logoURI
      // Set bnb token image temp
      //  if (type === 'bnb') image = 'https://nownodes.io/images/binance-smart-chain/bsc-logo.png'
    } else {
      let i = Lib.getTokenImage(type)
      if (i) {
        image = i
      }
    }
    if (type.toLowerCase() === 'plsx') {
      image = 'https://pulsex.com/brand/downloads/PLSX_coin.png'
    }
    return image
  }
  async balance (accounts) {
  }
}
