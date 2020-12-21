const RESTClient = require('../RESTClient')
const RESOURCE = 'bpapi/rest/security/session'

const Auth = {
    async login(username, password) {
        return RESTClient.post(RESOURCE, { username, password })
    },

    async logout(sessionToken) {
        return RESTClient.delete(RESOURCE, {
            headers: { 'session-token': sessionToken }
        })
    },

    async getSession(sessionToken) {
        return RESTClient.get(RESOURCE, {
            headers: { 'session-token': sessionToken }
        })
    }
}

module.exports = Auth