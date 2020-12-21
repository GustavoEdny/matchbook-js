const RESTClient = require('../RESTClient')

const Events = {
    async getEvents(params = {}) {
        return RESTClient.get('edge/rest/events', { params })
    },

    async getEvent(event_id, params = {}) {
        return RESTClient.get(`edge/rest/events/${event_id}`, { params })
    },

    async getMarkets(event_id, params = {}) {
        return RESTClient.get(`edge/rest/events/${event_id}/markets`, { params })
    },

    async getMarket(event_id, market_id, params = {}) {
        return RESTClient.get(`edge/rest/events/${event_id}/markets/${market_id}`, { params })
    },

    async getRunners(event_id, market_id, params = {}) {
        return RESTClient.get(`edge/rest/events/${event_id}/markets/${market_id}/runners`, { params })
    },

    async getRunner(event_id, market_id, runner_id, params = {}) {
        const endpoint = `edge/rest/events/${event_id}/markets/${market_id}/runners/${runner_id}`

        return RESTClient.get(endpoint, { params })
    },

    async getPrices(event_id, market_id, runner_id, params = {}) {
        const endpoint = `edge/rest/events/${event_id}/markets/${market_id}/runners/${runner_id}/prices`

        return RESTClient.get(endpoint, { params })
    },

    async getPopularMarkets(params = {}) {
        return RESTClient.get('edge/rest/popular-markets', { params })
    },

    async getPopularSports(params = {}) {
        return RESTClient.get('edge/rest/popular/sports', { params })
    }
}

module.exports = Events
