const RESTClient  = require('../RESTClient')

const Account = {
    async getAccount(sessionToken) {
        return RESTClient.get('edge/rest/account', {
            headers: { 'session-token': sessionToken }
        })
    },

    async getBalance(sessionToken) {
        return RESTClient.get('edge/rest/account/balance', {
            headers: { 'session-token': sessionToken }
        })
    }
}

module.exports = Account