export default {
  data () {
    return {
      poolContractABIS: {}
    }
  },
  methods: {
    async getContractABI (address) {
      let abi = this.poolContractABIS[address]

      if (!abi) {
        try {
          let result = await this.$axios.post('https://api.etherscan.io/api?apikey=YBABRIF5FBIVNZZK3R8USGI94444WQHHBN&module=contract&action=getabi&address=' + address + '')
          abi = result.data.result
          this.poolContractABIS[address] = abi
        } catch (error) {
          console.log(error)
        }
      }
      return abi
    },
    async isApprovalRequired (fromTokenAddress, toAddress, amountToSend) {
      let tx = null, transactionObject = {}

      let tokenABI = await this.getContractABI(fromTokenAddress)
      console.log(this.ethAccount, 'this.ethAccount')
      const tokenContract = new this.web3.eth.Contract(JSON.parse(tokenABI), fromTokenAddress)

      const allowance = await tokenContract.methods.allowance(this.ethAccount.key, toAddress).call()

      if (allowance === 0 || allowance < amountToSend) {
        let nonce = await this.web3.eth.getTransactionCount(this.currentToken.key, 'latest')

        transactionObject = {
          nonce: nonce
        }
        this.approvalRequired = true
        tx = tokenContract.methods.approve(
          toAddress,
          this.web3Instance.utils.toHex(this.sendAmount * 10 ** 18 * 100)
        )
        transactionObject.to = fromTokenAddress
        transactionObject.data = tx.encodeABI()
        this.getGasOptions(transactionObject)
      } else {
        this.approvalRequired = false
      }
      return this.approvalRequired ? transactionObject : this.approvalRequired
    },
    async getGasOptions (transactionObject) {
      const self = this

      this.web3Instance.eth.estimateGas(transactionObject).then(function (gasAmount) {
        self.gasOptions = [{
          label: 'Slow',
          value: self.getUSDGasPrice(self.$store.state.investment.gasPrice.slow, gasAmount).toFixed(2),
          gasPrice: self.$store.state.investment.gasPrice.slow * 1000000000,
          gas: gasAmount
        },
        {
          label: 'Fast',
          value: self.getUSDGasPrice(self.$store.state.investment.gasPrice.fast, gasAmount).toFixed(2),
          gasPrice: self.$store.state.investment.gasPrice.fast * 1000000000,
          gas: gasAmount
        },
        {
          label: 'Instant',
          value: self.getUSDGasPrice(self.$store.state.investment.gasPrice.instant, gasAmount).toFixed(2),
          gasPrice: self.$store.state.investment.gasPrice.instant * 1000000000,
          gas: gasAmount
        }
        ]

        console.log(self.gasOptions, ' self.gasOptions')
        if (!self.gasSelected && self.gasOptions[1]) {
          self.gasSelected = self.gasOptions[1]
        }
        self.invalidTransaction = false
      })
        .catch((error) => {
          console.log('estimateGas error', error)
          self.invalidTransaction = true
        })
    }
  }
}
