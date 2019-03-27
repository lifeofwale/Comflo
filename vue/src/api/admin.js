import {blackAxios} from '@/config'

export default {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': ''
  },
  users: 'users/',
  partners: 'partners/',
  companies: 'companies/',
  addPartners: 'admins/add-partner',
  removePartner: 'admins/remove-partner',
  admins: 'admins/admins',
  userToAdmin: '/make-admin',
  adminToUser: '/make-user',
  adminPostDeal: 'deals/',
  // adminUpdateTrader: 'admins/update-traders',
  adminUpdateStatus: 'admins/update-status',

  async getUsers (dargs) {
    try {
      const response = blackAxios.get(this.users, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async getUser (dargs) {
    try {
      const response = blackAxios.get(this.users + '/' + dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async getAllPartners (dargs) {
    try {
      const response = blackAxios.get(this.partners, dargs, {
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
      const response = blackAxios.get('admins/' + this.partners + dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async getCompanies (dargs) {
    try {
      const response = blackAxios.get(this.companies, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async getAdmins (dargs) {
    try {
      const response = blackAxios.get(this.admins, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async makeAdmin (dargs) {
    try {
      const response = blackAxios.get('admins/' + dargs + this.userToAdmin, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async makeUser (dargs) {
    try {
      const response = blackAxios.get('admins/' + dargs + this.adminToUser, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async postDeal (dargs) {
    try {
      const response = blackAxios.post(this.adminPostDeal, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async updateTrader (dargs) {
    try {
      const response = blackAxios.patch(this.adminUpdateTrader, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async updateStatus (dargs) {
    try {
      const response = blackAxios.patch(this.adminUpdateStatus, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async adminAddPartner (dargs) {
    try {
      const response = blackAxios.post(this.addPartners, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async adminRemovePartner (dargs) {
    try {
      const response = blackAxios.post(this.removePartner, {
        partner_id: dargs
      }, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  }
}
