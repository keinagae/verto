import EosWrapper from '../EosWrapper'
import { EVMProvider } from './providers/evm'

export class AtCryptoWallet {
  constructor (keys = [], accounts = [], refresh = {
    chains: [],
    acount: null
  }) {
    this.evmProvider = new EVMProvider()
    this.eos = new EosWrapper()
    const keys_json = '[{"type":"eth","name":"A1 Jakiero 772","key":"0xf4dcb9ca53b74e039f5fcfccd4f0548547a25772","chain":"eth"},{"type":"eos","name":"againagain11","key":"EOS8NCGrujCqJsnW4rrY2NrADy8gWoUhXD9kYpPVk9ATVFA3PCN8V","chain":"eos"},{"type":"eth","name":"ALBB205","key":"0x4973620b527cd74034f70c00b80d90b25a05d205","chain":"eth"},{"type":"avax","name":"Avalanche","key":"X-avax1m0dgdaqwd8tqqz86equqk3z9serhy3teg5k5ng","chain":"avax"},{"type":"eth","name":"BBMM 28","key":"0x76aa4f986154436e950604d59b5c6a54369b1e28","chain":"eth"},{"type":"btc","name":"Berthonytest","key":"12DbqbSgGu1naXHyGBdi3tVCJtVyw7PVxb","chain":"btc"},{"type":"bnb","name":"Binance Coin","key":"bnb1yzvev7j4lg0ah4v0tytg8ann7pftpu8kdw06z4","chain":"bnb"},{"type":"btc","name":"Bitcoin","key":"1Q4o6tBhsFx227aqUDtoqKtspMrPWTgSwT","chain":"btc"},{"type":"eth","name":"Chrome RoG ","key":"0x59e1a680bca30548e9d9a7f84db457cdbce9f41f","chain":"eth"},{"type":"eth","name":"CNVRT E74","key":"0x91b9dada77e2eb76d6f36b96f448c1f9a066be74","chain":"eth"},{"type":"eos","name":"crosschainfx","key":"EOS5if8Nkc8Uz1srNcdeMfSeBk19qFueYqjzduCiKzGc4Uharoecr","chain":"eos"},{"type":"dash","name":"DASH","key":"XecPhYXfWD9YKEBmneYoygFCJZd5mfbKCm","chain":"dash"},{"type":"eth","name":"ETH VTX 8B4","key":"0xcd41c348dc78869a93bc9571f3c175e1997048b4","chain":"eth"},{"type":"eos","name":"haydqmjyhage","key":"EOS8Y39ewxVunTZ8MhCqfA4DNXU52BaHJMktaHePVEduPKRanztuk","chain":"eos"},{"type":"eth","name":"JAK 6608","key":"0x181717bab64928669f606ee8b266502aaa2f6608","chain":"eth"},{"type":"eos","name":"lovevolentix","key":"EOS7N5KMPP5P9kFJhe7NPRTVC326oMjvuqgwiozk1ZYcPKUBf74Jc","chain":"eos"},{"type":"eth","name":"MLBSC 25a","key":"0x508f51c6fe10e5117caaef3306fd2126a161825a","chain":"eth"},{"type":"eos","name":"newvertoacct","key":"EOS8NCGrujCqJsnW4rrY2NrADy8gWoUhXD9kYpPVk9ATVFA3PCN8V","chain":"eos"},{"type":"eos","name":"newvertoeth1","key":"EOS5if8Nkc8Uz1srNcdeMfSeBk19qFueYqjzduCiKzGc4Uharoecr","chain":"eos"},{"type":"dot","name":"Polkadot","key":"1ERSWijTyngFo4ke1yaQbDzwmBMgSgRLpExxJd7yfJW6NMg","chain":"dot"},{"type":"eth","name":"SAM B73","key":"0x1ebc811a09175243dff76db56dd2d1eb5aef7b73","chain":"eth"},{"type":"eth","name":"SCI 688D","key":"0xef2ed8be426cd7057eb4fe5d636a03ff49b4688d","chain":"eth"},{"type":"eth","name":"SIF 232","key":"0x8a1bdb4feed4faf85a75b5fca07215e41f98d232","chain":"eth"},{"type":"sol","name":"Solana","key":"876EhcAoFA3HVyaFkxepHoTXXnK9nhYHMZMYUnudxgSD","chain":"sol"},{"type":"eth","name":"STAIDER 862","key":"0x4a02deadd223e106185144181b0816549edec862","chain":"eth"},{"type":"eth","name":"TIP1 DAC","key":"0x08eaac8841bafe6410d4a1f4338ee5a85cda3dac","chain":"eth"},{"type":"eth","name":"TR1 EF5","key":"0x104b7742725bb51c294e00e7922b74a89352aef5","chain":"eth"},{"type":"eth","name":"Tr2 13b","key":"0x3cf778ddc622f3ba7a4370fcb07e624de72fe13b","chain":"eth"},{"type":"eth","name":"TrezD87","key":"0xa551fb91e64e50e444a2292c6c598f02140dfd87","chain":"eth"},{"type":"eos","name":"vdex4freedom","key":"EOS6H5PophycCTismhywrguZ2N5VBSe3u5MRzFpL3hZH62de5ti2L","chain":"eos"},{"type":"eos","name":"vertofreeacc","key":"EOS5if8Nkc8Uz1srNcdeMfSeBk19qFueYqjzduCiKzGc4Uharoecr","chain":"eos"},{"type":"eos","name":"volentixcltw","key":"EOS6qw32CdRGMhAhFfKgSo7L5ArQCszbaQ9ye3c9Ym1nLEasAAJrr","chain":"eos"},{"type":"eos","name":"volentixdart","key":"EOS7N5KMPP5P9kFJhe7NPRTVC326oMjvuqgwiozk1ZYcPKUBf74Jc","chain":"eos"},{"type":"eos","name":"volentixdnhw","key":"EOS688emkMYqbedGSiNWvDFgAW56WmC4G2nTqshV4Gi1UZKFddGXx","chain":"eos"},{"type":"eos","name":"volentixeduv","key":"EOS7LaNePyHTeTTHw9gC3iYGXsNXjuk5xd2WKLfKviSm791hRW51Q","chain":"eos"},{"type":"eos","name":"volentixjeud","key":"EOS6iEvHXoDa4wSEvJ5eY1p6JBJzo1Ymm4p4Dm8MbAzHjNHnjnYsw","chain":"eos"},{"type":"eos","name":"volentixogym","key":"EOS7i2grApxwbHZzHVmheVHjRncRwqcnp63uVUskL1gAKAdrqx7q7","chain":"eos"},{"type":"eos","name":"volentixprvt","key":"EOS8KpH6xqu9CyjvwX6vkNX8LND25Sr41pDo8EK5HRi6zDiYXCg88","chain":"eos"},{"type":"eos","name":"volentixsekf","key":"EOS7RbAVp2jRVFeuTUznjBa66xnmFAxsAEZRgDJBdXxEqbawZRkdL","chain":"eos"},{"type":"eos","name":"volentixsema","key":"EOS77q3WNk6jsXB6kCUvQXanFwfWMR5hom4DtToUQscn77GsjJtGS","chain":"eos"},{"type":"eos","name":"volentixtvgd","key":"EOS8T97E5qJNdaLbZKDZBXSP6qFuVf3b86c41FdrqHqQAWV2ieb2f","chain":"eos"},{"type":"eos","name":"volentixwcrf","key":"EOS76vFHiiHiZP8e8rLGQynbqGMVzmjvKbGrRkTf8WC9URCCFbT8E","chain":"eos"},{"type":"eos","name":"volentixwufa","key":"EOS6cfHkzvTUgEaAzMH6DA8i73VF2S2T4BYc4FXYqHwpACtKvzv4U","chain":"eos"},{"type":"eos","name":"volentixwugn","key":"EOS8R6xGUE9yM1SeP4XKRKLFkbN6Sbon1yrTEsf35fJAZqgBP1Zkk","chain":"eos"},{"type":"eos","name":"volentixxjav","key":"EOS6qLzvCSo8HuTPFgZc5g5Mi2JEPuMnY6bAZ6pUaTYYVP2DUExBH","chain":"eos"},{"type":"eos","name":"volentixzfqi","key":"EOS8hdL4KK7QPxFLZpCgAA3RjyW3qq5kape4KJNjcbPy2r5FtutiG","chain":"eos"},{"type":"eos","name":"","key":"EOS6H5PophycCTismhywrguZ2N5VBSe3u5MRzFpL3hZH62de5ti2L","chain":"eos"},{"type":"eth","name":"A1 Jakiero 772","key":"0xf4dcb9ca53b74e039f5fcfccd4f0548547a25772","chain":"eth"}]'
    keys = JSON.parse(keys_json)
    accounts = accounts.filter(
      o => !keys || keys.filter(a => a[o.type === 'eos' ? 'name' : 'key'].toLowerCase() === o[o.type === 'eos' ? 'name' : 'key'].toLowerCase()).length === 0
    )
    accounts = (keys || []).concat(accounts).filter(c => !refresh.chains.length || refresh.chains.includes(c.type))
    this.evmAccounts = accounts.filter(account => this.evmProvider.evm(account.chain))
    this.data = {}
  }

  async balance () {
    for (let i = 0; i < this.evmAccounts.length; i++) {
      const data = await this.evmProvider.accountBalance(this.evmAccounts[i])
      console.log(data)
      data.forEach(item => {
        let chainData = {}
        if (!this.data.hasOwnProperty(item.chain)) {
          chainData = {
            accounts: [],
            amount: 0,
            chain: item.chain
          }
          this.data[item.chain] = chainData
        } else {
          chainData = this.data[item.chain]
        }
        chainData.accounts.push(item)
        chainData.amount += item.usd
      })
    }
  }
}
