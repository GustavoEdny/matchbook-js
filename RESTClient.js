const Axios = require('axios')

const client = Axios.create({ baseURL: 'https://api.matchbook.com/' })

class RESTClient {
    constructor(token = '') {
        this.token = token
    }

    static factory(token = '') {
        return new RESTClient(token)
    }

    async get(url, config = {}) {
        return client.get(url, this.buildRequestConfig(config))
    }

    async post(url, data = {}, config = {}) {
        return client.post(url, data, this.buildRequestConfig(config))
    }

    async put(url, data = {}, config = {}) {
        return client.put(url, data, this.buildRequestConfig(config))
    }

    async patch(url, data = {}, config = {}) {
        return client.patch(url, data, this.buildRequestConfig(config))
    }

    async delete(url, config = {}) {
        return client.delete(url, this.buildRequestConfig(config))
    }

    setToken(token) {
        this.token = token

        return this
    }

    buildRequestConfig(config = {}) {
        return { headers: { 'session-token': this.token }, ...config }
    }
}

module.exports = RESTClient