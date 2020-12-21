const Axios = require('axios')

const client = Axios.create({ baseURL: 'https://api.matchbook.com/' })

const RESTClient = {
    async get(url, config) {
        return client.get(url, config = {})
    },

    async post(url, data = {}, config = {}) {
        return client.post(url, data, config)
    },

    async put(url, data = {}, config = {}) {
        return client.put(url, data, config)
    },

    async patch(url, data = {}, config = {}) {
        return client.patch(url, data, config)
    },

    async delete(url, config = {}) {
        return client.delete(url, config)
    }
}

module.exports = RESTClient