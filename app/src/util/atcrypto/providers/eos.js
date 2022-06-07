import { BaseProvider } from './base'
import axios from 'axios'
import store from '../../../store'

export class EosProvider extends BaseProvider {
  constructor () {
    super()
    this.eosUSD = 1
    this.getEosUsed()
  }

  async getEosUsed () {
    await axios
      .get(
        process.env[store.state.settings.network].CACHE +
        'https://api.newdex.io/v1/price?symbol=eosio.token-eos-usdt'
      )
      .then(res => {
        this.eosUSD = res.data.data.price
      })
  }

  async balance () {
    return [{
      accounts: [],
      chain: 'eos'
    }]
  }
}
