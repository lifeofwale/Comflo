import {blackAxios} from '@/config'
const admin = require('./admin')
const company = require('./company')
const offer = require('./offer')

export default {
  /**
   * User Routes
   */
  headers: {
    'Content-Type': 'application/json',
    'Authorization': ''
  },

  login: 'users/signin',
  register: 'users/signup',
  sendToken: 'users/send-token',
  checkToken: 'users/verify-token',
  resetPass: 'users/reset-pass',
  address: 'users/address',

  /**
   * Deal Routes
   */
  deals: 'deals/',
  selldeal: 'deals/sell-deal',
  updateDocs: 'deals/update-docs',
  dealDocs: 'deals/deal-docs',
  // deal: 'deals/',
  // dealImage: 'users/deal-image',
  // deleteImage: 'users/delete-image',
  // deleteDocs: 'users/delete-doc',

  // buydeal: 'users/buy-deal',
  // addImages: 'users/add-images',

  async userlogin (dargs) {
    try {
      const response = blackAxios.post(this.login, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  settoken (token) {
    this.headers['Authorization'] = 'Bearer' + token
    admin.default.headers['Authorization'] = 'Bearer' + token
    company.default.headers['Authorization'] = 'Bearer' + token
    offer.default.headers['Authorization'] = 'Bearer' + token
    // console.log(this.headers)
    return true
  },

  async userregister (dargs) {
    try {
      const response = blackAxios.post(this.register, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userSendToken (dargs) {
    try {
      const response = blackAxios.post(this.sendToken, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userCheckToken (dargs) {
    try {
      const response = blackAxios.post(this.checkToken, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async getDeals () {
    try {
      const response = blackAxios.get(this.deals, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async getDeal (id) {
    try {
      const response = blackAxios.get(this.deals + '/' + id, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  // TODO: change in frontend
  async updateDeal (dargs, id) {
    try {
      const response = blackAxios.patch(this.deals + '/' + id, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  // async getDealImage (dargs) {
  //   try {
  //     const response = blackAxios.post(this.dealImage, {
  //       image_id: dargs
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //         // '':''
  //       }
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  async getDealDocs (id) {
    try {
      const response = blackAxios.get(this.dealDocs + '/' + id, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userDeleteImage (dargs) {
    try {
      const response = blackAxios.post(this.deleteImage, {
        file_id: dargs
      }, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userDeleteDoc (id) {
    try {
      const response = blackAxios.delete(this.dealDocs + '/' + id, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userSellDeal (dargs) {
    try {
      const response = blackAxios.post(this.selldeal, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userBuyDeal (dargs) {
    try {
      const response = blackAxios.post(this.buydeal, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userUpdateDeal (dargs) {
    try {
      const response = blackAxios.patch(this.updatedeal, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async getName (dargs) {
    try {
      const response = blackAxios.get(this.address + '/' + dargs.address, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userChangePass (dargs) {
    try {
      const response = blackAxios.patch(this.resetPass, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  // TODO: change in frontend
  async userAddDocs (dargs, id) {
    try {
      const response = blackAxios.put(this.dealDocs + '/' + id, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userAddImages (dargs) {
    try {
      const response = blackAxios.post(this.addImages, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userUpdateDocs (dargs) {
    try {
      const response = blackAxios.put(this.updateDocs, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async negotiateDeal (dargs) {
    try {
      const response = blackAxios.post(this.negotiate, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  }
}
