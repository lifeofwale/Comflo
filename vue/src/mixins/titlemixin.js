import { encode } from '@/config'
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
    encodeIt (id, reference, type) {
      return encode(id, reference, type)
    }
  }
}
