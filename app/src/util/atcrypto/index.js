import EosWrapper from '../EosWrapper'
import { EVMProvider } from './providers/evm'
import { EosProvider } from './providers/eos'

const PROVIDERS = {
  evm: EVMProvider,
  eos: EosProvider
}

export class AtCryptoWallet {
  constructor ({
    keys = [],
    accounts = [],
    refresh = {
      chains: [],
      acount: null
    },
    update = (data) => {
    }
  }) {
    this.update = update
    this.providers = {}
    Object.keys(PROVIDERS).forEach(key => {
      this.providers[key] = new PROVIDERS[key]()
    })
    this.eos = new EosWrapper()
    accounts = accounts.filter(
      o => !keys || keys.filter(a => a[o.type === 'eos' ? 'name' : 'key'].toLowerCase() === o[o.type === 'eos' ? 'name' : 'key'].toLowerCase()).length === 0
    )
    accounts = (keys || []).concat(accounts).filter(c => !refresh.chains.length || refresh.chains.includes(c.type))
    this.evmAccounts = accounts.filter(account => this.providers.evm.evm(account.chain))
    this.nonEvmAccounts = accounts.filter(account => !this.providers.evm.evm(account.chain))
    this.nonEvmAccountsWithChains = {}
    this.nonEvmAccounts.forEach(account => {
      if (!this.nonEvmAccountsWithChains.hasOwnProperty(account.chain)) {
        this.nonEvmAccountsWithChains[account.chain] = []
      }
      this.nonEvmAccountsWithChains[account.chain].push(account)
    })
    console.log(this.nonEvmAccountsWithChains)
    this.data = {}
    this.accounts = {
      evm: this.evmAccounts,
      eos: []
    }
  }

  async balance () {
    Object.keys(this.providers).forEach(key => {
      const accounts = this.accounts[key]
      this.providers[key].balance(accounts).then(data => {
        this.data = { ...this.data, ...data }
        this.update(this.data)
      }).catch(error => {
        console.log(error)
      })
    })
  }
}
