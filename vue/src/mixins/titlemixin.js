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
  return dashboard
}

export default {
  data: function () {
    return {
      transactions: [],
      allTransactions: [],
      query: ''
    }
  },
  created () {
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
    const dashboard = getDashboard(this)
    if (dashboard) {
      document.body.classList.add('bg-grey')
    }
  },
  methods: {
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
        this.transactions = this.allTransactions
      } else {
        this.transactions = this.allTransactions.filter(transaction => transaction.type.toLowerCase().includes(query) || transaction.commodity.toLowerCase().includes(query) || transaction.quantity.toString().toLowerCase().includes(query) || transaction.incoterm.toLowerCase().includes(query) || transaction.location.toLowerCase().includes(query) || transaction.reference.toLowerCase().includes(query) || transaction.price.toString().toLowerCase().includes(query))
      }
    },
    /**
     * helper function, check 2 addresses are same
     */
    notSame (seller, user) {
      // console.log(seller, user)
      return !addCompare(seller, user)
    },
  }
}
