import {blackAxios} from '@/config'
import UserStore from '@/store/modules/user'
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
  verify: 'users/activate-email',
  resend: 'users/resend-token',
  register: 'users/signup',
  sendToken: 'users/send-token',
  checkToken: 'users/verify-token',
  resetPass: 'users/reset-pass',
  changePass: 'users/change-pass',
  address: 'users/address',
  users: 'users/',

  /**
   * Deal Routes
   */
  deals: 'deals/',
  selldeal: 'deals/sell-deal',
  updateDocs: 'deals/update-docs',
  transactionDocs: 'deals/deal-docs',
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
    this.headers.Authorization = 'Bearer' + token
    admin.default.headers.Authorization = 'Bearer' + token
    company.default.headers.Authorization = 'Bearer' + token
    offer.default.headers.Authorization = 'Bearer' + token
    console.log(this.headers)
    // return true
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

  async userverify (dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      console.log(this.headers.Authorization)
      const response = blackAxios.patch(this.verify, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userresend (dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      // console.log(this.headers.Authorization)
      const response = blackAxios.patch(this.resend, dargs, {
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

  async userupdate (dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      // console.log(this.headers.Authorization)
      const response = blackAxios.patch(this.users, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async userchangepass (dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      // console.log(this.headers.Authorization)
      const response = blackAxios.patch(this.changePass, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async getPartners (dargs) {
    try {
      const response = blackAxios.get(this.partners + dargs, {
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      const response = blackAxios.patch(this.deals + '/' + id, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async getTransactionDocs (id) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      const response = blackAxios.get(this.transactionDocs + '/' + id, {
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      const response = blackAxios.delete(this.transactionDocs + '/' + id, {
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      const response = blackAxios.post(this.selldeal, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  // async userBuyDeal (dargs) {
  //   try {
  //     this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
  //     const response = blackAxios.post(this.buydeal, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  async userUpdateDeal (dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
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
  async userAddDocs (dargs, offerId, docId) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      const response = blackAxios.put(`offers/${offerId}/documents/${docId}`, dargs, {
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
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
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
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
