import {blackAxios} from '@/config'
import AdminStore from '@/store/modules/admin'

export default {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': ''
  },
  users: 'users/',
  partners: 'partners/',
  companies: 'companies/',
  addPartners: 'admins/add-partner/',
  removePartner: 'admins/remove-partner/',
  admins: 'admins/admins',
  userToAdmin: '/make-admin',
  adminToUser: '/make-user',
  adminPostDeal: 'deals/',
  // adminUpdateTrader: 'admins/update-traders',
  adminUpdateStatus: 'admins/update-status',
  company: 'companies/',
  kycfailed: 'admins/kyc-failed',

  async getUsers (dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + AdminStore.state.admin.token
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
      this.headers.Authorization = 'Bearer ' + AdminStore.state.admin.token
      const response = blackAxios.get(this.users + '/' + dargs, {
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
      this.headers.Authorization = 'Bearer ' + AdminStore.state.admin.token
      const response = blackAxios.get(this.companies, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async getCompany (dargs) {
    try {
      const response = blackAxios.get(this.companies + dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async createAdmin (dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + AdminStore.state.admin.token
      const response = blackAxios.post('admins/create', dargs, {
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

  async passKYC (id) {
    try {
      this.headers.Authorization = 'Bearer ' + AdminStore.state.admin.token
      const response = blackAxios.patch(`${this.company}${id}/kyc-passed`, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  },

  async failKYC (id, dargs) {
    try {
      this.headers.Authorization = 'Bearer ' + AdminStore.state.admin.token
      const response = blackAxios.patch(`${this.company}${id}/kyc-failed`, dargs, {
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
      const response = blackAxios.post(this.removePartner + dargs.id, {
        partner_id: dargs.partner
      }, {
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
      const response = blackAxios.post(`${this.adminPostDeal}${dargs.offer}`, dargs, {
        headers: this.headers
      })
      return response
    } catch (e) {
      console.log(e)
      return false
    }
  }

  // async getAdmins (dargs) {
  //   try {
  //     const response = blackAxios.get(this.admins, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async updateTrader (dargs) {
  //   try {
  //     const response = blackAxios.patch(this.adminUpdateTrader, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  // async updateStatus (dargs) {
  //   try {
  //     const response = blackAxios.patch(this.adminUpdateStatus, dargs, {
  //       headers: this.headers
  //     })
  //     return response
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },
}
