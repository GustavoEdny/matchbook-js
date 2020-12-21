const RESTClient  = require('../RESTClient')

class Account extends RESTClient {
    async getAccount() {
        return this.get('edge/rest/account')
    }

    async getBalance() {
        return this.get('edge/rest/account/balance')
    }
}

module.exports = Account