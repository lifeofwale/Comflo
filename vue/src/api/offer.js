import {blackAxios} from '@/config'

export default {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': ''
  },
  /**
   * User Routes
   */
  offers: 'offers/',
  userOffers: 'offers/user-offers/',

  async getOffers (params) {
    try {
      const response = blackAxios.get(this.offers + params, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async getOffer (id) {
    try {
      const response = blackAxios.get(this.offers + id, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async postOffer (dargs) {
    try {
      const response = blackAxios.post(this.offers, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async patchOffer (id, dargs) {
    try {
      const response = blackAxios.patch(this.offers + id, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async patchOfferStatus (id, dargs) {
    try {
      const response = blackAxios.patch(this.offers + id + '/status', dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async getOfferPartners (id) {
    try {
      const response = blackAxios.get(this.offers + id + '/partners', {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async negotiateOffer (id, dargs) {
    try {
      const response = blackAxios.post(this.offers + id + '/negotiate', dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async getUserOffers (userId) {
    try {
      const response = blackAxios.get(this.userOffers + userId, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async getOfferDocs (offerId, docId) {
    try {
      const response = blackAxios.get(this.offers + `${offerId}/documents`, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async getContractDocs (offerId, docId) {
    try {
      const response = blackAxios.get(this.offers + `${offerId}/documents/contract`, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async putOfferDocs (offerId, docId) {
    try {
      const response = blackAxios.get(this.offers + `${offerId}/documents/${docId}`, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async userUpdateDocs (id, dargs) {
    try {
      const response = blackAxios.put(this.offers + `${id}/documents`, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  }
}
