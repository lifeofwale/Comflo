import {blackAxios} from '@/config'
import UserStore from '@/store/modules/user'

export default {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': ''
  },
  companies: 'companies/',
  // /companies/:id/kyc/:doc_id
  // login: 'companies/signin',
  // register: 'companies/signup',
  // users: 'companies/users',
  // newuser: 'companies/add-user',
  // deactivate: 'companies/deactivate-user',
  // activate: 'companies/activate-user',
  // remove: 'companies/remove-user',
  // sendToken: 'companies/send-token',
  // checkToken: 'companies/verify-token',
  // resetPass: 'companies/reset-pass',

  async companyKycUrl (id, docId) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      const response = blackAxios.get(`${this.companies}${id}/kyc/${docId}`, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async companyKyc (id, dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      const response = blackAxios.post(this.companies + id + '/complete-kyc', dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async companyupdate (id, dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + UserStore.state.user.token
      const response = blackAxios.patch(this.companies + id, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  }
  // async companylogin (dargs) {
  //   try {
  //     const response = blackAxios.post(this.login, {
  //       email: dargs.email,
  //       password: dargs.password
  //     }, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async companyregister (dargs) {
  //   try {
  //     const response = blackAxios.post(this.register, {
  //       name: dargs.name,
  //       email: dargs.email,
  //       phone: dargs.phone,
  //       country: dargs.country,
  //       password: dargs.password
  //     }, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async getUsers (dargs) {
  //   try {
  //     const response = blackAxios.post(this.users, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async addUser (dargs) {
  //   try {
  //     const response = blackAxios.post(this.newuser, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async deactivateUser (dargs) {
  //   try {
  //     const response = blackAxios.post(this.deactivate, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async activateUser (dargs) {
  //   try {
  //     const response = blackAxios.post(this.activate, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async removeUser (dargs) {
  //   try {
  //     const response = blackAxios.post(this.remove, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async companySendToken (dargs) {
  //   try {
  //     const response = blackAxios.post(this.sendToken, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async companyCheckToken (dargs) {
  //   try {
  //     const response = blackAxios.post(this.checkToken, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async companyChangePass (dargs) {
  //   try {
  //     const response = blackAxios.post(this.resetPass, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // }
}
