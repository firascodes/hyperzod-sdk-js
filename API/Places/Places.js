const Request = require('../../Request');

module.exports = {
    // Search Places
    searchPlaces(payload) {
        const url = `/places-search/search`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    // Reverse Geocode
    reverseGeocode(payload) {
        const url = `/places-search/reverse-geocode`
        return Request.get(`${url}`, { params: { ...payload } })
    }
}