import { encode, decode, addCompare } from '@/config'
function getTitle (vm) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

function getDashboard (vm) {
  const { dashboard } = vm.$options
  if (dashboard) {
    return typeof dashboard === 'function'
      ? dashboard.call(vm)
      : dashboard
  }
}

function capitalCase (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default {
  data: function () {
    return {
      disable: false,
      collections: [],
      passwordFieldType: 'password',
      filteredCollections: [],
      allCollections: [],
      query: '',
      commodities: [],
      filterQuery: '',
      pagination: {},
      notificationSystem: {
        options: {
          ballon: {
            balloon: true,
            position: 'topCenter'
          },
          info: {
            position: 'topCenter'
          },
          success: {
            timeout: false,
            position: 'topCenter'
          },
          warning: {
            position: 'topCenter'
          },
          error: {
            timeout: false,
            position: 'topCenter'
          }
        }
      }
    }
  },
  mounted () {
    const title = getTitle(this)
    if (title) {
      // console.log('title', title)
      document.title = title
    }
    const dashboard = getDashboard(this)
    if (dashboard) {
      document.body.classList.add('bg-grey')
    }
    // this.$toast.show('Welcome!', 'Hey Show', this.notificationSystem.options.ballon)
    // this.$toast.info('Welcome!', 'Hello', this.notificationSystem.options.info)
    // this.$toast.success('Successfully inserted record!', 'OK', this.notificationSystem.options.success)
    // this.$toast.warning('You forgot important data', 'Caution', this.notificationSystem.options.warning)
    // this.$toast.error('Illegal operation', 'Error', this.notificationSystem.options.error)
  },
  methods: {
    daysLeft (from) {
      let today = new Date()
      let fromDate = new Date(from)
      let oneDay = 1000 * 60 * 60 * 24
      return Math.ceil((fromDate.getTime() - today.getTime()) / (oneDay))
    },
    handleError (error, loader) {
      if (error.message === 'Network Error') {
        this.$toast.error('Connection not established, please check your internet connection', '', this.notificationSystem.options.error)
      } else {
        this.$toast.error(error.message, '', this.notificationSystem.options.error)
      }
      loader.hide()
      this.disable = false
    },
    /**
     * convert a price string
     */
    locale (text) {
      let price = text.toString().split(' ')
      return price[0] + ' ' + parseInt(price[1], 10).toLocaleString()
    },
    /**
     * only return numbers
     */
    isNumber (evt) {
      evt = evt || window.event
      var charCode = evt.which ? evt.which : evt.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    /**
     * Encode the encrypted transaction string
     */
    encodeIt (id, reference, type) {
      return encode(id, reference, type)
    },
    /**
     * Decode the encrypted transaction string
     */
    decodeIt (text) {
      return decode(text)
    },
    /**
     * helper function, check 2 addresses are same
     */
    searchTransactions () {
      let query = this.query.toString().toLowerCase()
      if (query === '') {
        this.collections = this.filteredCollections
        // console.log(this.collections.length)
        this.collections = this.paginator(this.collections, 1, 20)
      } else {
        this.collections = this.filteredCollections.filter((collection) => {
          // // console.log()
          for (let index = 0; index < Object.keys(collection).length; index++) {
            const collectionElement = Object.values(collection)[index].toString()
            // // console.log(collectionElement, collectionElement.toLowerCase().includes(query))
            if (collectionElement.toLowerCase().includes(query) === false) {
              continue
            } else {
              return true
            }
          }
          // return transaction.type.toLowerCase().includes(query) || transaction.commodity.toLowerCase().includes(query) || transaction.quantity.toString().toLowerCase().includes(query) || transaction.incoterm.toLowerCase().includes(query) || transaction.location.toLowerCase().includes(query) || transaction.reference.toLowerCase().includes(query) || transaction.price.toString().toLowerCase().includes(query)
        })
        // console.log(this.collections.length)
        this.collections = this.paginator(this.collections, 1, 20)
      }
    },
    paginator (items, page, perPage) {
      page = page || 1
      perPage = perPage || 10
      const offset = (page - 1) * perPage
      const paginatedItems = items.slice(offset).slice(0, perPage)
      const totalPpages = Math.ceil(items.length / perPage)

      this.pagination = {
        page: page,
        per_page: perPage,
        pre_page: page - 1 ? page - 1 : null,
        next_page: (totalPpages > page) ? page + 1 : null,
        total: items.length,
        total_pages: totalPpages,
        data: paginatedItems
      }
      return paginatedItems
    },
    /**
     * helper function, filter commodities
     */
    filter (index) {
      const query = this.filterQuery.toString().toLowerCase()
      if (query === '') {
        this.filteredCollections = this.allCollections
        this.collections = this.filteredCollections
        this.searchTransactions()
      } else {
        this.filteredCollections = this.allCollections.filter((collection) => {
          const collectionElement = Object.values(collection)[index].toString()
          // console.log(collectionElement, query)
          return collectionElement.toLowerCase().includes(query)
        })
        this.collections = this.filteredCollections
        this.searchTransactions()
      }
    },
    /**
     * helper function, check 2 addresses are same
     */
    notSame (seller, user) {
      // // console.log(seller, user)
      return !addCompare(seller, user)
    },
    switchVisibility () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    makeDropdown (id) {
      document.getElementById('show-' + id).classList.toggle('show')
      document.getElementById('show-2-' + id).classList.toggle('show')
    },
    cleanObject (object) {
      delete object.password
      delete object.createdAt
      delete object.updatedAt
      delete object.user_type
      delete object.verified
      delete object.status
      delete object.__v

      return object
    },
    capitalCase (string) {
      return capitalCase(string)
    }
  },
  filters: {
    capitalCase (string) {
      return capitalCase(string)
    }
  }
}
