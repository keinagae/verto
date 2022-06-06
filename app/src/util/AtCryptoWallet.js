import Lib from '@/util/walletlib'
import store from '../store'
import axios from 'axios'
import EosWrapper from './EosWrapper'

export class AtCryptoWallet {
  constructor (keys = [], accounts = [], refresh = {
    chains: [],
    acount: null
  }) {
    this.eos = new EosWrapper()
    const keys_json = '[{"type":"eth","name":"A1 Jakiero 772","key":"0xf4dcb9ca53b74e039f5fcfccd4f0548547a25772","chain":"eth"},{"type":"eos","name":"againagain11","key":"EOS8NCGrujCqJsnW4rrY2NrADy8gWoUhXD9kYpPVk9ATVFA3PCN8V","chain":"eos"},{"type":"eth","name":"ALBB205","key":"0x4973620b527cd74034f70c00b80d90b25a05d205","chain":"eth"},{"type":"avax","name":"Avalanche","key":"X-avax1m0dgdaqwd8tqqz86equqk3z9serhy3teg5k5ng","chain":"avax"},{"type":"eth","name":"BBMM 28","key":"0x76aa4f986154436e950604d59b5c6a54369b1e28","chain":"eth"},{"type":"btc","name":"Berthonytest","key":"12DbqbSgGu1naXHyGBdi3tVCJtVyw7PVxb","chain":"btc"},{"type":"bnb","name":"Binance Coin","key":"bnb1yzvev7j4lg0ah4v0tytg8ann7pftpu8kdw06z4","chain":"bnb"},{"type":"btc","name":"Bitcoin","key":"1Q4o6tBhsFx227aqUDtoqKtspMrPWTgSwT","chain":"btc"},{"type":"eth","name":"Chrome RoG ","key":"0x59e1a680bca30548e9d9a7f84db457cdbce9f41f","chain":"eth"},{"type":"eth","name":"CNVRT E74","key":"0x91b9dada77e2eb76d6f36b96f448c1f9a066be74","chain":"eth"},{"type":"eos","name":"crosschainfx","key":"EOS5if8Nkc8Uz1srNcdeMfSeBk19qFueYqjzduCiKzGc4Uharoecr","chain":"eos"},{"type":"dash","name":"DASH","key":"XecPhYXfWD9YKEBmneYoygFCJZd5mfbKCm","chain":"dash"},{"type":"eth","name":"ETH VTX 8B4","key":"0xcd41c348dc78869a93bc9571f3c175e1997048b4","chain":"eth"},{"type":"eos","name":"haydqmjyhage","key":"EOS8Y39ewxVunTZ8MhCqfA4DNXU52BaHJMktaHePVEduPKRanztuk","chain":"eos"},{"type":"eth","name":"JAK 6608","key":"0x181717bab64928669f606ee8b266502aaa2f6608","chain":"eth"},{"type":"eos","name":"lovevolentix","key":"EOS7N5KMPP5P9kFJhe7NPRTVC326oMjvuqgwiozk1ZYcPKUBf74Jc","chain":"eos"},{"type":"eth","name":"MLBSC 25a","key":"0x508f51c6fe10e5117caaef3306fd2126a161825a","chain":"eth"},{"type":"eos","name":"newvertoacct","key":"EOS8NCGrujCqJsnW4rrY2NrADy8gWoUhXD9kYpPVk9ATVFA3PCN8V","chain":"eos"},{"type":"eos","name":"newvertoeth1","key":"EOS5if8Nkc8Uz1srNcdeMfSeBk19qFueYqjzduCiKzGc4Uharoecr","chain":"eos"},{"type":"dot","name":"Polkadot","key":"1ERSWijTyngFo4ke1yaQbDzwmBMgSgRLpExxJd7yfJW6NMg","chain":"dot"},{"type":"eth","name":"SAM B73","key":"0x1ebc811a09175243dff76db56dd2d1eb5aef7b73","chain":"eth"},{"type":"eth","name":"SCI 688D","key":"0xef2ed8be426cd7057eb4fe5d636a03ff49b4688d","chain":"eth"},{"type":"eth","name":"SIF 232","key":"0x8a1bdb4feed4faf85a75b5fca07215e41f98d232","chain":"eth"},{"type":"sol","name":"Solana","key":"876EhcAoFA3HVyaFkxepHoTXXnK9nhYHMZMYUnudxgSD","chain":"sol"},{"type":"eth","name":"STAIDER 862","key":"0x4a02deadd223e106185144181b0816549edec862","chain":"eth"},{"type":"eth","name":"TIP1 DAC","key":"0x08eaac8841bafe6410d4a1f4338ee5a85cda3dac","chain":"eth"},{"type":"eth","name":"TR1 EF5","key":"0x104b7742725bb51c294e00e7922b74a89352aef5","chain":"eth"},{"type":"eth","name":"Tr2 13b","key":"0x3cf778ddc622f3ba7a4370fcb07e624de72fe13b","chain":"eth"},{"type":"eth","name":"TrezD87","key":"0xa551fb91e64e50e444a2292c6c598f02140dfd87","chain":"eth"},{"type":"eos","name":"vdex4freedom","key":"EOS6H5PophycCTismhywrguZ2N5VBSe3u5MRzFpL3hZH62de5ti2L","chain":"eos"},{"type":"eos","name":"vertofreeacc","key":"EOS5if8Nkc8Uz1srNcdeMfSeBk19qFueYqjzduCiKzGc4Uharoecr","chain":"eos"},{"type":"eos","name":"volentixcltw","key":"EOS6qw32CdRGMhAhFfKgSo7L5ArQCszbaQ9ye3c9Ym1nLEasAAJrr","chain":"eos"},{"type":"eos","name":"volentixdart","key":"EOS7N5KMPP5P9kFJhe7NPRTVC326oMjvuqgwiozk1ZYcPKUBf74Jc","chain":"eos"},{"type":"eos","name":"volentixdnhw","key":"EOS688emkMYqbedGSiNWvDFgAW56WmC4G2nTqshV4Gi1UZKFddGXx","chain":"eos"},{"type":"eos","name":"volentixeduv","key":"EOS7LaNePyHTeTTHw9gC3iYGXsNXjuk5xd2WKLfKviSm791hRW51Q","chain":"eos"},{"type":"eos","name":"volentixjeud","key":"EOS6iEvHXoDa4wSEvJ5eY1p6JBJzo1Ymm4p4Dm8MbAzHjNHnjnYsw","chain":"eos"},{"type":"eos","name":"volentixogym","key":"EOS7i2grApxwbHZzHVmheVHjRncRwqcnp63uVUskL1gAKAdrqx7q7","chain":"eos"},{"type":"eos","name":"volentixprvt","key":"EOS8KpH6xqu9CyjvwX6vkNX8LND25Sr41pDo8EK5HRi6zDiYXCg88","chain":"eos"},{"type":"eos","name":"volentixsekf","key":"EOS7RbAVp2jRVFeuTUznjBa66xnmFAxsAEZRgDJBdXxEqbawZRkdL","chain":"eos"},{"type":"eos","name":"volentixsema","key":"EOS77q3WNk6jsXB6kCUvQXanFwfWMR5hom4DtToUQscn77GsjJtGS","chain":"eos"},{"type":"eos","name":"volentixtvgd","key":"EOS8T97E5qJNdaLbZKDZBXSP6qFuVf3b86c41FdrqHqQAWV2ieb2f","chain":"eos"},{"type":"eos","name":"volentixwcrf","key":"EOS76vFHiiHiZP8e8rLGQynbqGMVzmjvKbGrRkTf8WC9URCCFbT8E","chain":"eos"},{"type":"eos","name":"volentixwufa","key":"EOS6cfHkzvTUgEaAzMH6DA8i73VF2S2T4BYc4FXYqHwpACtKvzv4U","chain":"eos"},{"type":"eos","name":"volentixwugn","key":"EOS8R6xGUE9yM1SeP4XKRKLFkbN6Sbon1yrTEsf35fJAZqgBP1Zkk","chain":"eos"},{"type":"eos","name":"volentixxjav","key":"EOS6qLzvCSo8HuTPFgZc5g5Mi2JEPuMnY6bAZ6pUaTYYVP2DUExBH","chain":"eos"},{"type":"eos","name":"volentixzfqi","key":"EOS8hdL4KK7QPxFLZpCgAA3RjyW3qq5kape4KJNjcbPy2r5FtutiG","chain":"eos"},{"type":"eos","name":"","key":"EOS6H5PophycCTismhywrguZ2N5VBSe3u5MRzFpL3hZH62de5ti2L","chain":"eos"},{"type":"eth","name":"A1 Jakiero 772","key":"0xf4dcb9ca53b74e039f5fcfccd4f0548547a25772","chain":"eth"}]'
    keys = JSON.parse(keys_json)
    accounts = accounts.filter(
      o => !keys || keys.filter(a => a[o.type === 'eos' ? 'name' : 'key'].toLowerCase() === o[o.type === 'eos' ? 'name' : 'key'].toLowerCase()).length === 0
    )
    accounts = (keys || []).concat(accounts).filter(c => !refresh.chains.length || refresh.chains.includes(c.type))
    const eosCount = accounts.filter(o => !o.watch && o.type === 'eos' && o.name !== 'EOS Key').length
    if (eosCount) {
      accounts = accounts.filter(o => o.name !== 'EOS Key')
    }
    accounts.forEach((item) => {
      console.log(Lib.isEvm(item.type), item)
    })
    accounts.sort(function (a, b) {
      return a.type === 'eth' ? -1 : 1
    })
    this.data = {}
    const evmAccoounts = accounts.filter(account => Lib.isEvm(account.type))
    console.log(evmAccoounts)
    this.fetchCustomTokens(accounts)
    accounts.map(wallet => {
      if (!wallet.hasOwnProperty('type')) {
        wallet.type = 'verto'
      }
      if (Lib.getEvms().find(f => f.chain === wallet.type) && wallet.type !== 'eth') {
        wallet.type = 'eth'
      }

      if (wallet.type === 'eos') {
        this.getEosUSD()

        wallet.to = '/verto/wallets/eos/eos/' + wallet.name.toLowerCase()
        wallet.icon =
          'https://files.coinswitch.co/public/coins/' +
          wallet.type.toLowerCase() +
          '.png'
        wallet.chain = 'eos'
      } else if (wallet.type === 'verto') {
        wallet.to = '/verto/wallets/eos/verto/' + wallet.name.toLowerCase()
        wallet.icon = 'https://files.coinswitch.co/public/coins/eos.png'
        wallet.chain = 'eos'
      } else {
        wallet.to =
          '/verto/wallets/' +
          wallet.type +
          '/' +
          wallet.type +
          '/' +
          wallet.key
        wallet.chain = wallet.type

        wallet.disabled =
          wallet.type !== 'eth' &&
          wallet.type !== 'dot' &&
          wallet.type !== 'ksm' &&
          wallet.type !== 'bnb' &&
          wallet.type !== 'sol'

        if (wallet.type === 'ksm') {
          wallet.icon =
            'https://assets.coingecko.com/coins/images/9568/small/m4zRhP5e_400x400.jpg'
        } else if (wallet.type === 'avax') {
          wallet.icon =
            'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png'
        } else if (wallet.type === 'sol') {
          wallet.icon =
            'https://assets.coingecko.com/coins/images/4128/small/coinmarketcap-solana-200.png'
        } else {
          wallet.icon =
            'https://files.coinswitch.co/public/coins/' +
            wallet.type.toLowerCase() +
            '.png'
        }
        // wallet.vespucciScore = vespucciScore
      }
      if (wallet.type === 'sol') {
        // wallet.key = 'HekM1hBawXQu6wK6Ah1yw1YXXeMUDD2bfCHEzo25vnEB'
      }
      wallet.disabled = false

      if (
        wallet.type === 'btc' ||
        wallet.type === 'ltc' ||
        wallet.type === 'bnb' ||
        wallet.type === 'dash' ||
        wallet.type === 'dot' ||
        wallet.type === 'ksm' ||
        wallet.type === 'sol'
      ) {
        Lib.balance(wallet.type, wallet.key).then(result => {
          // console.log('libwallet', result)
          // static value for recording video purpos
          // wallet.amount = wallet.type === 'btc' ? '0.23000000' : result.amount
          wallet.amount = result.amount
          wallet.tokenPrice = result.tokenPrice || 0
          wallet.usd = result.usd
        })
      } else if (wallet.type === 'terra') {
        this.getTerraBalance(wallet)
      }
    })
    accounts
      .map(async wallet => {
        if (wallet.type.toLowerCase() === 'eos') {
          // If tokens are missing from this API, anyone can add them using this contract: https://bloks.io/account/customtokens?loadContract=true&tab=Actions&account=customtokens&scope=customtokens&limit=100&action=set
          let eosBalance = await this.eos.getCurrencyBalanceP(
            wallet.name,
            'eosio.token',
            'EOS'
          )

          let balances = []

          eosBalance =
            !eosBalance || !eosBalance[0] || isNaN(eosBalance[0].split(' ')[0])
              ? 0
              : eosBalance[0].split(' ')[0]

          balances.push({
            amount: eosBalance,
            code: 'eosio.token',
            symbol: 'EOS'
          })

          let privateKeysAttrs = this.extractEOSPrivateKey(
            wallet.privateKey,
            wallet.key
          )

          if (privateKeysAttrs) {
            wallet.privateKey = privateKeysAttrs.privateKey
            wallet.privateKeyEncrypted = privateKeysAttrs.privateKeyEncrypted
          }
          this.getEOSTokens(wallet, balances)
        }
        // else if (wallet.type === 'eth') {
        //   Lib.getEvms().filter(m =>
        //     ![1, 940].includes(m.network_id) && ((!this.refresParams.chains.length || this.refresParams.chains.includes(m.chain)) && (!this.refresParams.account || this.refresParams.account.isEvm)) // Until eth is integrated into covalent api
        //   ).forEach(e => {
        //     axios
        //       .get(
        //         process.env[store.state.settings.network].CACHE +
        //         'https://api.covalenthq.com/v1/' + e.network_id +
        //         '/address/' + wallet.key + '/balances_v2/',
        //         { auth: { username: 'ckey_a9e6f6ab90584877b86b151eef3' } }
        //       )
        //       .then(res => {
        //         res.data.data.items.map(t => {
        //           let amount = (t.balance / 10 ** t.contract_decimals) * t.quote_rate
        //           /* const getLogo = (chainId, t) => {
        //             let url = null
        //             if(chainId === 56){
        //               url = 'https://pancakeswap.finance/images/tokens/'+t.contract_address+'.svg'
        //             } else {
        //             url = t.logo_url && t.logo_url.length ? t.logo_url : self.getTokenImage(e.chain, t.contract_ticker_symbol.toLowerCase())
        //           }
        //         } */
        //
        //           let type = t.contract_ticker_symbol ? t.contract_ticker_symbol.toLowerCase() : ''
        //           self.tableData.push({
        //             isEvm: true,
        //             disabled: false,
        //             type: type,
        //             name: wallet.name,
        //             tokenPrice: t.quote_rate,
        //             key: wallet.key.toLowerCase(),
        //             privateKey: wallet.privateKey,
        //             amount: t.balance / 10 ** t.contract_decimals,
        //             usd: amount,
        //             watch: wallet.watch,
        //             decimals: t.contract_decimals,
        //             contract: t.contract_address,
        //             chain: e.chain,
        //             to:
        //               '/verto/wallets/' + e.chain + '/' +
        //               type +
        //               '/' +
        //               wallet.key,
        //             icon: self.getTokenImage(e.chain, type)
        //           })
        //         })
        //         this.updateWallet()
        //       }).catch(e => {
        //       console.log(e, 'covalenthq')
        //     })
        //   })
        //
        //   // Getting balance using zapper
        //   axios
        //     .get(
        //       process.env[store.state.settings.network].CACHE +
        //       'https://api.ethplorer.io/getAddressInfo/' +
        //       wallet.key +
        //       '?apiKey=EK-kJ7LW-wCWTsAy-ALujf'
        //     )
        //     .then(res => {
        //       let ethplorer = res ? res.data : false
        //
        //       if (!ethplorer || !ethplorer.ETH) { return this.getEthBalanceFromZapper(wallet) }
        //
        //       self.tableData
        //         .filter(w => w.key === wallet.key && w.type === 'eth' && w.chain === 'eth')
        //         .map(eth => {
        //           eth.amount = ethplorer.ETH.balance
        //           eth.isEvm = true
        //           eth.decimals = 18
        //           eth.key = wallet.key.toLowerCase()
        //           eth.usd = ethplorer.ETH.balance * ethplorer.ETH.price.rate
        //           eth.tokenPrice = ethplorer.ETH.price.rate
        //           eth.icon = 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png'
        //         })
        //       // let ethBalance = ethplorer.ETH.balance * ethplorer.ETH.price.rate
        //       // store.state.wallets.portfolioTotal += isNaN(ethBalance) ? 0 : ethBalance
        //       // console.log('ethplorer', ethplorer)
        //       if (ethplorer) {
        //         axios
        //           .get(
        //             process.env[store.state.settings.network].CACHE +
        //             'https://api.tokensets.com/v1/rebalancing_sets',
        //             {
        //               headers: { 'X-Requested-With': 'XMLHttpRequest' }
        //             }
        //           )
        //           .then(res => {
        //             // let tokenSets = res.data.rebalancing_sets
        //
        //             this.getPulseBalance(wallet, ethplorer)
        //
        //             if (ethplorer.tokens) {
        //               ethplorer.tokens
        //                 .filter(t => t.balance > 0 && t.tokenInfo.symbol)
        //                 .map(async (t, index) => {
        //                   t.tokenInfo.image = 'https://tokens.1inch.io/' + t.tokenInfo.address + '.png'
        //
        //                   // let usd = t.tokenInfo.symbol ? Lib.findInExchangeList('eth', t.tokenInfo.symbol.toLowerCase(), t.tokenInfo.address) : false
        //                   let image = t.tokenInfo.image
        //                   let amount =
        //                     (t.balance / 10 ** t.tokenInfo.decimals), rate = 0
        //                   if (t.tokenInfo.symbol.toLowerCase() === 'enzf') {
        //                     let performance = await this.getVaultPerformance(t.tokenInfo.address)
        //                     if (performance) {
        //                       rate = performance.sharePrice
        //                     }
        //                     if (['0xe00d15b722a3c3a5ae2d4dd68a302ec8fdc2ccba', '0x185a02fd5576817fa0c9847cd6f2acc6707bfa0a'].includes(t.tokenInfo.address)) {
        //                       image = 'https://verto.volentix.io/statics/img/staider-logo.png'
        //                     }
        //                   } else {
        //                     rate = t.tokenInfo.price ? t.tokenInfo.price.rate : 0
        //                   }
        //                   amount = amount * rate
        //
        //                   self.tableData.push({
        //                     isEvm: true,
        //                     disabled: false,
        //                     type: t.tokenInfo.symbol
        //                       ? t.tokenInfo.symbol.toLowerCase()
        //                       : '',
        //                     name: wallet.name,
        //                     tokenPrice: rate,
        //                     key: wallet.key.toLowerCase(),
        //                     decimals: parseInt(t.tokenInfo.decimals),
        //                     privateKey: wallet.privateKey,
        //                     amount: t.balance / 10 ** t.tokenInfo.decimals,
        //                     usd: amount || 0,
        //                     contract: t.tokenInfo.address,
        //                     chain: 'eth',
        //                     to:
        //                       '/verto/wallets/eth/' +
        //                       t.tokenInfo.symbol.toLowerCase() +
        //                       '/' +
        //                       wallet.key,
        //                     icon: image
        //                   })
        //
        //                   // store.state.wallets.portfolioTotal += isNaN(amount) ? 0 : amount
        //                   this.updateWallet()
        //                 })
        //             }
        //           })
        //       }
        //     })
        // }
        // else if (wallet.type === 'bnb') {
        //   // self.tableData.push({
        //   //   selected: false,
        //   //   disabled: false,
        //   //   type: t.tokenInfo.symbol ? t.tokenInfo.symbol.toLowerCase() : '',
        //   //   name: wallet.name,
        //   //   tokenPrice: t.tokenInfo.price.rate,
        //   //   key: wallet.key.toLowerCase(),
        //   //   privateKey: wallet.privateKey,
        //   //   amount: t.balance / (10 ** t.tokenInfo.decimals),
        //   //   usd: amount,
        //   //   contract: t.tokenInfo.address,
        //   //   chain: 'eth',
        //   //   to: '/verto/wallets/eth/' + t.tokenInfo.symbol.toLowerCase() + '/' + wallet.key,
        //   //   icon: t.tokenInfo.image
        //   // })
        //   // // store.state.wallets.portfolioTotal += isNaN(amount) ? 0 : amount
        //   // this.updateWallet()
        // }
      })
  }

  async getEvmBalance (accounts) {
    // accounts.forEach(account => {
    //   // Lib.getEvms().filter(m =>
    //   //   ![1, 940].includes(m.network_id)
    //   // ).forEach(evm=>{
    //   //
    //   // })
    // })
    // Lib.getEvms().filter(m =>
    //   ![1, 940].includes(m.network_id) && ((!this.refresParams.chains.length || this.refresParams.chains.includes(m.chain)) && (!this.refresParams.account || this.refresParams.account.isEvm)) // Until eth is integrated into covalent api
    // ).forEach(e => {
    //   axios
    //     .get(
    //       process.env[store.state.settings.network].CACHE +
    //       'https://api.covalenthq.com/v1/' + e.network_id +
    //       '/address/' + wallet.key + '/balances_v2/',
    //       { auth: { username: 'ckey_a9e6f6ab90584877b86b151eef3' } }
    //     )
    //     .then(res => {
    //       res.data.data.items.map(t => {
    //         let amount = (t.balance / 10 ** t.contract_decimals) * t.quote_rate
    //         /* const getLogo = (chainId, t) => {
    //           let url = null
    //           if(chainId === 56){
    //             url = 'https://pancakeswap.finance/images/tokens/'+t.contract_address+'.svg'
    //           } else {
    //           url = t.logo_url && t.logo_url.length ? t.logo_url : self.getTokenImage(e.chain, t.contract_ticker_symbol.toLowerCase())
    //         }
    //       } */
    //
    //         let type = t.contract_ticker_symbol ? t.contract_ticker_symbol.toLowerCase() : ''
    //         self.tableData.push({
    //           isEvm: true,
    //           disabled: false,
    //           type: type,
    //           name: wallet.name,
    //           tokenPrice: t.quote_rate,
    //           key: wallet.key.toLowerCase(),
    //           privateKey: wallet.privateKey,
    //           amount: t.balance / 10 ** t.contract_decimals,
    //           usd: amount,
    //           watch: wallet.watch,
    //           decimals: t.contract_decimals,
    //           contract: t.contract_address,
    //           chain: e.chain,
    //           to:
    //             '/verto/wallets/' + e.chain + '/' +
    //             type +
    //             '/' +
    //             wallet.key,
    //           icon: self.getTokenImage(e.chain, type)
    //         })
    //       })
    //       this.updateWallet()
    //     }).catch(e => {
    //       console.log(e, 'covalenthq')
    //     })
    // })
  }

  getEOSTokens (wallet, balances) {
    axios
      .get('https://www.api.bloks.io/account/' +
        wallet.name +
        '?type=getAccountTokens&coreSymbol=EOS'
      )
      .then(response => {
        if (response && response.data && response.data.tokens) {
          response.data.tokens.forEach((token, i) => {
            let image =
              token.metadata.logo.split('https:').length === 3
                ? token.metadata.logo
                : 'https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/logos/placeholder.png'
            let data = token
            let exchange = token.exchanges.find(
              o => o.name.toLowerCase() === 'defibox'
            )
            data.tokenPrice =
              exchange ? exchange.price : (token.exchanges && token.exchanges[0]
                ? token.exchanges[0].price
                : 0)
            if (token.currency.toLowerCase() === 'vtx') {
              let vtxData = store.state.tokens.walletTokensData.find(
                o => o.symbol === 'vtx'
              )
              if (vtxData) {
                data.tokenPrice = vtxData.current_price
              } else if (data.tokenPrice) {
                data.tokenPrice = token.exchanges.find(
                  o => o.name.toLowerCase() === 'defibox'
                ).price
              }
            }
            let usd = Lib.findInExchangeList('eos', token.currency, token.contract)
            if (!this.data.hasOwnProperty(token.currency.toLowerCase())) {
              this.data[token.currency.toLowerCase()] = []
            }
            this.data[token.currency.toLowerCase()].push({
              disabled: false,
              type: token.currency.toLowerCase(),
              name: wallet.name,
              watch: wallet.watch,
              key: wallet.key,
              privateKey: wallet.privateKey,
              privateKeyEncrypted: wallet.privateKeyEncrypted,
              amount: token.amount,
              usd: usd ? token.amount * data.tokenPrice : 0,
              tokenPrice: data.tokenPrice,
              contract: token.contract,
              precision: token.decimals,
              chain: 'eos',
              to:
                '/verto/wallets/eos/' +
                token.currency.toLowerCase() +
                '/' +
                wallet.name,
              icon: image
            })

            if (i === response.data.tokens.length - 1) {
              this.getEosMainBalance(wallet, balances.find(o => o.symbol === 'EOS').amount, 12345)
            }
          })
        } else {
          this.getEOSTokensV2(wallet, balances, true)
        }
      }).catch(e => {
        this.getEOSTokensV2(wallet, balances, true)
      })
  }

  async getEOSTokensV2 (wallet, balances, fetchTokens) {
    let response = await axios.get(process.env[store.state.settings.network].CACHE + 'https://eosx-apigw.eosx.io/api/balance/mainnet/' + wallet.name)
    if (response && response.data && response.data.data && response.data.data.balances) {
      response.data.data.balances.forEach(el => {
        balances.push({
          amount: el.amount,
          code: el.contract,
          symbol: el.currency,
          decimals: el.decimals
        })
      })
    }

    balances
      .filter(
        o => o.symbol.toLowerCase() === 'eos' || fetchTokens === true
      )
      .map((t, index) => {
        if (t.symbol.toLowerCase() !== 'eos') {
          if (+t.amount !== 0) {
            let name = wallet.name.toLowerCase()
            let type = t.symbol.toLowerCase()
            // let coinSlug = coinsNames.data.find(coin => coin.symbol.toLowerCase() === type.toLowerCase())
            // let vespucciScore = 0
            // if (coinSlug) {
            //   this.getCoinScore(coinSlug.slug).then(result => {
            //     vespucciScore = result.vespucciScore
            //   })
            // }
            if (wallet.privateKey) {
              let value = wallet.privateKey.split('_')
              wallet.privateKey = value[value.length - 1]
            }
            let usdValue = 0

            this.getUSD(t.code, type).then(result => {
              usdValue = result

              if (type === 'vtx') {
                let vtxData = store.state.tokens.walletTokensData.find(
                  o => o.symbol === 'vtx'
                )
                if (vtxData) {
                  usdValue = vtxData.current_price
                }
              }
              let usd = Lib.findInExchangeList('eos', type, t.code)
              if (this.data.hasOwnProperty(type)) {
                this.data[type] = []
              }
              this.data[type].push({
                disabled: false,
                type,
                name,
                // vespucciScore,
                key: wallet.key,
                privateKey: wallet.privateKey,
                privateKeyEncrypted: wallet.privateKeyEncrypted,
                amount: t.amount,
                watch: wallet.watch,
                tokenPrice: usd ? usdValue : usd,
                usd: usd ? usdValue * t.amount : 0,
                contract: t.code,
                precision: t.decimals ? t.decimals : (t.amount.toString().split('.')[1]
                  ? t.amount.split('.')[1].length
                  : 0),
                chain: 'eos',
                to: '/verto/wallets/eos/' + type + '/' + name,
                icon:
                  'https://defibox.s3.ap-northeast-1.amazonaws.com/eos/' +
                  t.code +
                  '-' +
                  t.symbol.toLowerCase() +
                  '.png'
              })
            })
          }
        } else {
          this.getEosMainBalance(wallet, t.amount, 45567)
        }
      })
  }

  getEosMainBalance (wallet, amount, test) {
    if (this.data.hasOwnProperty('eos')) {
      this.data.eos = []
    }
    this.data.eos
      .filter(w => w.key === wallet.key && w.name === wallet.name)
      .map(eos => {
        this.eos.getAccount(wallet.name).then(async a => {
          if (this.eosUSD === 0) {
            await this.getEosUSD()
          }
          eos = await this.getVtxStakes(eos)

          eos.amount = amount || '0.0000'
          eos.usd = this.eosUSD * amount
          eos.contract = 'eosio.token'
          eos.tokenPrice = this.eosUSD
          eos.precision = 4
          eos.vtx = 4
          eos.accountData = a
          eos.proxy = a.voter_info ? a.voter_info.proxy : ''
          eos.staked = a.voter_info
            ? a.voter_info.staked / 10000
            : 0
        })
      })
  }

  async getVtxStakes (f) {
    if (!this.vtxPrice) {
      this.vtxPrice = (await axios.get(process.env[store.state.settings.network].CACHE + 'https://api.coingecko.com/api/v3/simple/price?ids=volentix-vtx&vs_currencies=usd')).data['volentix-vtx'].usd
    }

    let stakes = await this.eos.getTable('vertostaking', f.name, 'accountstake')
    let stakedAmounts = 0
    if (stakes.length) {
      stakes.forEach(s => {
        s.stake_amount = Math.round(+s.amount.split(' ')[0] * 10000) / 10000
        // s.subsidy = Math.round(+s.subsidy.split(' ')[0] * 10000) / 10000
        stakedAmounts += +s.stake_amount
      })
    }
    f.vtxStakes = stakedAmounts
    f.vtxStakesUsd = stakedAmounts * this.vtxPrice
    return f
  }

  extractEOSPrivateKey (privateKey, key) {
    // Looking for existing Private key format {"keys":[{},{}]}
    let data = null

    if (
      (typeof privateKey === 'string' || privateKey instanceof String) &&
      privateKey.includes(key)
    ) {
      data = JSON.parse(privateKey)
    } else if (typeof privateKey === 'object') {
      data = privateKey
    }

    try {
      let value = false
      if (data && data.hasOwnProperty('keys')) {
        let wallet = data.keys.find(w => w.key === key)
        if (wallet) {
          value = {
            privateKey: wallet.privateKey,
            privateKeyEncrypted: wallet.privateKeyEncrypted
          }
        }
      }
      return value
    } catch (e) {
      return false
    }
  }

  async getTerraBalance (wallet) {
    axios.get(process.env[store.state.settings.network].CACHE + 'https://fcd.terra.dev/v1/market/swaprate/uusd').then(async res => {
      let marketPrice = res.data
      axios.get(process.env[store.state.settings.network].CACHE + 'https://assets.terra.money/cw20/tokens.json').then(async resTokens => {
        let response = (await axios.get(process.env[store.state.settings.network].CACHE + 'https://fcd.terra.dev/v1/bank/' + wallet.key))
        if (response.data && response.data.balance) {
          let alltokens = Object.keys(resTokens.data.mainnet)
          for (let i = 0, counter = 20; i <= alltokens.length; i = i + counter) {
            let resEc20s = await axios.post('https://mantle.terra.dev/', Lib.getCw20TokenBalanceQuery(alltokens.slice(i, i + counter), wallet.key))
            if (resEc20s && resEc20s.data && resEc20s.data.data) {
              let tokensWIthBlance = Object.keys(resEc20s.data.data).filter(o => parseFloat(JSON.parse(resEc20s.data.data[o].Result).balance))
              tokensWIthBlance.map(async o => {
                let tkData = resTokens.data.mainnet[Object.keys(resTokens.data.mainnet).find(x => resTokens.data.mainnet[x].token.toLowerCase() === o)]
                let amount = parseFloat(JSON.parse(resEc20s.data.data[o].Result).balance)
                let decimals = tkData.decimals || 6
                let usd = 0

                if (tkData.symbol.toLowerCase() === 'aust') {
                  usd = await Lib.getUstState() || 0
                } else {
                  usd = await this.getCw20TokenPrice(amount, o, decimals)
                }

                amount = amount / 10 ** decimals
                let total = usd * amount
                let n = {
                  contract: o,
                  isCw20: true,
                  amount: amount,
                  icon: tkData.icon,
                  type: tkData.symbol,
                  name: wallet.name,
                  watch: wallet.watch,
                  tokenPrice: usd || 0,
                  key: wallet.key.toLowerCase(),
                  privateKey: wallet.privateKey,
                  usd: total || 0,
                  decimals: tkData.decimals,
                  chain: 'terra'
                }
                if (!this.data.hasOwnProperty(n.type)) {
                  this.data[n.type] = []
                }
                this.data[n.type].push(n)
              })
            }
          }
          response.data.balance.forEach(t => {
            let priceData = marketPrice.find(o => o.denom === t.denom)

            if (t.denom === 'uusd') {
              priceData = { swaprate: 1 }
            } else {
              priceData.swaprate = 1 / priceData.swaprate
            }
            let sym = t.denom === 'uluna' ? 'Luna' : t.denom.substring(1).toUpperCase().substring(0, t.denom.length - 2) + 'T'
            let total = priceData ? priceData.swaprate * (t.available / 10 ** 6) : 0
            let data = {
              type: sym,
              contract: t.denom,
              name: wallet.name,
              watch: wallet.watch,
              tokenPrice: priceData ? priceData.swaprate : 0,
              key: wallet.key.toLowerCase(),
              privateKey: wallet.privateKey,
              amount: t.available / 10 ** 6,
              usd: total || 0,
              decimals: 6,
              chain: 'terra',
              icon: 'https://assets.terra.money/icon/60/' + sym + '.png'
            }
            if (t.denom === 'uusd') {
              this.data['terra'] = [data]
            } else {
              console.log(data) // todo find in wich chain to place this data
            }
          })
        }
      })
    })
    /*
    let config = {
      method: 'get',
      url: process.env[store.state.settings.network].CACHE + 'https://api.apeboard.finance/wallet/terra/' + wallet.key,
      headers: {
        'accept': 'application/json, text/plain,',
        'ape-secret': 'U2FsdGVkX1+oVNvU20qw1VOBRyzXTuprRlQFR0Babg2IIWNUNBIAW4cfzxoNbpjOMj9kQ0ZmklkFLHOfkwjcT4HYPq3ufVJiQ4HTzFQUA/nCCDchgwU/avzsXs9n+U0zpO/5GmZfvivjFH3icgOS6A==',
        'passcode': 'A63uGa8775Ne89wwqADwKYGeyceXAxmHL'
      }
    }

    axios(config).then(async res => {
      res.data.filter(a => !a.isNative).map(async o => {
        let n = {
          contract: wallet.address,
          isCw20: !o.isNative,
          amount: o.balance,
          icon: o.logo,
          type: o.symbol,
          name: wallet.name,
          watch: wallet.watch,
          tokenPrice: o.price || 0,
          key: wallet.key.toLowerCase(),
          privateKey: wallet.privateKey,
          usd: o.price * o.balance,
          decimals: o.decimals,
          chain: 'terra'
        }

        this.tableData.push(n)
      })
      this.updateWallet()
    }) */
  }

  async getEosUSD () {
    await axios
      .get(
        process.env[store.state.settings.network].CACHE +
        'https://api.newdex.io/v1/price?symbol=eosio.token-eos-usdt'
      )
      .then(res => {
        this.eosUSD = res.data.data.price
      })
  }

  fetchCustomTokens (wallets) {
    let data = localStorage.getItem('customTokens')
    let tokens = (data ? JSON.parse(data) : [])
    wallets.filter(o => Lib.isEvm(o.type)).forEach(wallet => {
      tokens.map(async (t, i) => {
        let balance = await Lib.getEvmTokenBalance(t.address, wallet.key, t.chain)
        if (!this.data.hasOwnProperty(t.type)) {
          this.data[t.type] = []
        }
        this.data[t.type].push({
          isEvm: true,
          disabled: false,
          type: t.type,
          name: wallet.name,
          watch: wallet.watch,
          tokenPrice: 0,
          key: wallet.key.toLowerCase(),
          privateKey: wallet.privateKey,
          amount: balance,
          usd: 0,
          decimals: t.decimals,
          contract: t.address,
          chain: t.chain,
          icon: this.getTokenImage(t.chain, t.type)
        })

        if (tokens.length - 1 === i) {
        }
      })
    })
  }

  getTokenImage (chain, type) {
    if (type === 'tpls') type = 'eth'
    let image = Lib.getDefaultToken(chain)

    if (Lib.getEvms().find(o => o.chain === chain) && store.state.tokens.evmTokens[chain]) {
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
}
