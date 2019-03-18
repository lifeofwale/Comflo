import {blackAxios} from '@/config'

export default {
  headers: {
    'Content-Type': 'application/json',
    'usertoken': ''
  },
  login: 'partners/signin',
  register: 'partners/signup',
  sendToken: 'partners/send-token',
  checkToken: 'partners/verify-token',
  resetPass: 'partners/reset-pass',

  async partnerlogin (dargs) {
    try {
      const response = blackAxios.post(this.login, {
        email: dargs.email,
        password: dargs.password
      }, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async partnerregister (dargs) {
    try {
      const response = blackAxios.post(this.register, {
        name: dargs.name,
        email: dargs.email,
        phone: dargs.phone,
        country: dargs.country,
        password: dargs.password
      }, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async partnerSendToken (dargs) {
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

  async partnerCheckToken (dargs) {
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

  async partnerChangePass (dargs) {
    try {
      const response = blackAxios.post(this.resetPass, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  }
}
