import axios from 'axios'
import { BaseProvider } from './base'

export class EVMProvider extends BaseProvider {
  constructor () {
    super()
    this.evms = [{
      name: 'Ethereum',
      chain: 'eth',
      nativeToken: 'eth',
      icon: 'https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png',
      provider: 'https://mainnet.infura.io/v3/0dd5e7c7cbd14603a5c20124a76afe63',
      explorer: 'https://etherscan.io/tx/',
      gas: 'https://ethgas.watch/api/gas',
      network_id: 1,
      coinGeckoId: 'ethereum'
    }, {
      name: 'Binance Smart Chain',
      chain: 'bsc',
      nativeToken: 'bnb',
      icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
      provider: 'https://bsc-dataseed1.binance.org:443',
      explorer: 'https://bscscan.com/tx/',
      gas: 'https://api.bscscan.com/api?module=proxy&action=eth_gasPrice&apikey=JK2Z5XQYR1FMCAQFQDBFNS5FJM6XC7ETTB',
      network_id: 56,
      coinGeckoId: 'binancecoin'
    }, {
      name: 'Polygon',
      chain: 'matic',
      nativeToken: 'matic',
      icon: 'https://cdnwp-s3.benzinga.com/wp-content/uploads/2021/04/29083434/polygon.png',
      provider: 'https://rpc-mainnet.maticvigil.com/v1/08e234538a11a966248fd358b3b135c4aeb6924b',
      explorer: 'https://explorer-mainnet.maticvigil.com/tx/',
      gas: 'https://gasstation-mainnet.matic.network/',
      network_id: 137,
      coinGeckoId: 'matic-network'
    }, {
      name: 'Avalanche C-Chain',
      chain: 'avaxc',
      nativeToken: 'avax',
      icon: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png',
      provider: 'https://api.avax.network/ext/bc/C/rpc',
      explorer: 'https://cchain.explorer.avax.network/tx/',
      gas: '', // The C-Chain gas price is 225 nAVAX (225 GWei). The C-Chain gas limit is 8 * 10e6 (8,000,000).
      network_id: 43114,
      coinGeckoId: 'avalanche-2'
    }, {
      name: 'PulseChain',
      chain: 'tpls',
      nativeToken: 'tpls',
      icon: 'https://pbs.twimg.com/profile_images/1412839310106234882/Z4H3-LxW_400x400.jpg',
      provider: 'https://rpc.v2b.testnet.pulsechain.com',
      explorer: 'https://scan.v2b.testnet.pulsechain.com/tx/',
      gas: '', // The C-Chain gas price is 225 nAVAX (225 GWei). The C-Chain gas limit is 8 * 10e6 (8,000,000).
      network_id: 940,
      testnet: true
    }, {
      name: 'Fantom',
      chain: 'ftm',
      nativeToken: 'ftm',
      icon: 'https://assets.coingecko.com/coins/images/4001/large/Fantom.png?1558015016',
      provider: 'https://rpcapi.fantom.network/',
      explorer: 'https://ftmscan.com/tx/',
      gas: '', // FTM tokens are required to pay gas fees. The Covalent API response returns gas_* fields in fiat units
      network_id: 250,
      coinGeckoId: 'fantom'
    }]
    this.evms = {
      eth: {
        name: 'Ethereum',
        chain: 'eth',
        nativeToken: 'eth',
        icon: 'https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png',
        provider: 'https://mainnet.infura.io/v3/0dd5e7c7cbd14603a5c20124a76afe63',
        explorer: 'https://etherscan.io/tx/',
        gas: 'https://ethgas.watch/api/gas',
        network_id: 1,
        coinGeckoId: 'ethereum'
      },
      bsc: {
        name: 'Binance Smart Chain',
        chain: 'bsc',
        nativeToken: 'bnb',
        icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
        provider: 'https://bsc-dataseed1.binance.org:443',
        explorer: 'https://bscscan.com/tx/',
        gas: 'https://api.bscscan.com/api?module=proxy&action=eth_gasPrice&apikey=JK2Z5XQYR1FMCAQFQDBFNS5FJM6XC7ETTB',
        network_id: 56,
        coinGeckoId: 'binancecoin'
      },
      matic: {
        name: 'Polygon',
        chain: 'matic',
        nativeToken: 'matic',
        icon: 'https://cdnwp-s3.benzinga.com/wp-content/uploads/2021/04/29083434/polygon.png',
        provider: 'https://rpc-mainnet.maticvigil.com/v1/08e234538a11a966248fd358b3b135c4aeb6924b',
        explorer: 'https://explorer-mainnet.maticvigil.com/tx/',
        gas: 'https://gasstation-mainnet.matic.network/',
        network_id: 137,
        coinGeckoId: 'matic-network'
      },
      avaxc: {
        name: 'Avalanche C-Chain',
        chain: 'avaxc',
        nativeToken: 'avax',
        icon: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png',
        provider: 'https://api.avax.network/ext/bc/C/rpc',
        explorer: 'https://cchain.explorer.avax.network/tx/',
        gas: '', // The C-Chain gas price is 225 nAVAX (225 GWei). The C-Chain gas limit is 8 * 10e6 (8,000,000).
        network_id: 43114,
        coinGeckoId: 'avalanche-2'
      },
      tpls: {
        name: 'PulseChain',
        chain: 'tpls',
        nativeToken: 'tpls',
        icon: 'https://pbs.twimg.com/profile_images/1412839310106234882/Z4H3-LxW_400x400.jpg',
        provider: 'https://rpc.v2b.testnet.pulsechain.com',
        explorer: 'https://scan.v2b.testnet.pulsechain.com/tx/',
        gas: '', // The C-Chain gas price is 225 nAVAX (225 GWei). The C-Chain gas limit is 8 * 10e6 (8,000,000).
        network_id: 940,
        testnet: true
      },
      ftm: {
        name: 'Fantom',
        chain: 'ftm',
        nativeToken: 'ftm',
        icon: 'https://assets.coingecko.com/coins/images/4001/large/Fantom.png?1558015016',
        provider: 'https://rpcapi.fantom.network/',
        explorer: 'https://ftmscan.com/tx/',
        gas: '', // FTM tokens are required to pay gas fees. The Covalent API response returns gas_* fields in fiat units
        network_id: 250,
        coinGeckoId: 'fantom'
      }
    }
  }

  async accountBalance (account) {
    const evm = this.evm(account.chain)
    let items = []
    const key = account.key
    // chainTotal
    let data = {
      tokenList: [],
      total: 0,
      key: key
    }
    if (evm) {
      try {
        const response = await axios.get(
          'https://api.covalenthq.com/v1/' + evm.network_id +
          '/address/' + key + '/balances_v2/',
          { auth: { username: 'ckey_a9e6f6ab90584877b86b151eef3' } }
        )
        let totalUsd = 0
        items = response.data.data.items.map(transaction => {
          let amount = (transaction.balance / 10 ** transaction.contract_decimals) * transaction.quote_rate
          let type = transaction.contract_ticker_symbol ? transaction.contract_ticker_symbol.toLowerCase() : ''
          totalUsd += amount
          return {
            isEvm: true,
            disabled: false,
            type: type,
            name: account.name,
            tokenPrice: transaction.quote_rate,
            key: account.key.toLowerCase(),
            amount: transaction.balance / 10 ** transaction.contract_decimals,
            usd: amount,
            watch: account.watch,
            decimals: transaction.contract_decimals,
            contract: transaction.contract_address,
            chain: evm.chain,
            to:
              '/verto/wallets/' + evm.chain + '/' +
              type +
              '/' +
              account.key,
            icon: this.getTokenImage(evm.chain, type)
          }
        })
        data.total = totalUsd
        data.tokenList = items
      } catch (e) {
        console.log(e)
      }
      return data
    }
  }

  async balance (accounts) {
    const data = {}
    for (let i = 0; i < accounts.length; i++) {
      const account = accounts[i]
      const accountData = await this.accountBalance(account)
      let chainData = {}
      if (!data.hasOwnProperty(account.chain)) {
        chainData = {
          accounts: [],
          chain: account.chain,
          chainTotal: 0
        }
        data[account.chain] = chainData
      } else {
        chainData = data[account.chain]
      }
      chainData.accounts.push({
        tokenList: accountData.tokenList,
        total: accountData.total
      })
      chainData.chainTotal += accountData.total
    }
    return Object.values(data)
  }

  evm (chain) {
    return this.evms[chain]
  }
}