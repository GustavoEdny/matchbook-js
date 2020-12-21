const RESTClient = require('../RESTClient')
const RESOURCE = 'bpapi/rest/security/session'

class Auth extends RESTClient {
    async login(username, password) {
        return this.post(RESOURCE, { username, password })
    }

    async logout() {
        return this.delete(RESOURCE)
    }

    async getSession() {
        return this.get(RESOURCE)
    }
}

module.exports = Auth