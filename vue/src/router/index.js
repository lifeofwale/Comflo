import Vue from 'vue'
import Router from 'vue-router'

// Containers
import UserLayouts from '@/components/UserLayouts'
import VueMultianalytics from 'vue-multianalytics'
// import CompanyLayouts from '@/components/CompanyLayouts'
// import PartnerLayouts from '@/components/PartnerLayouts'
import AdminLayouts from '@/components/AdminLayouts'

// Views
import View404 from '@/views/404'

/**
 * User Routes
 */
import Bug from '@/views/user/Bug'
import Task from '@/views/user/Task'
import UserLogin from '@/views/user/Login'
import UserRegister from '@/views/user/Register'
import UserForgotPass from '@/views/user/ForgotPass'
import UserDeals from '@/views/user/Deals'
import UserMarketplace from '@/views/user/Marketplace'
import UserContracts from '@/views/user/Contracts'
import UserContract from '@/views/user/Contract'
import UserDeal from '@/views/user/Deal'
import UserHome from '@/views/user/Home'
import UserAddDeal from '@/views/user/AddDeal'
import UserEditDeal from '@/views/user/EditDeal'

// /**
//  * Company Routes
//  */
// import CompanyLogin from '@/views/company/Login'
// import CompanyRegister from '@/views/company/Register'
// import CompanyForgotPass from '@/views/company/ForgotPass'
// import CompanyHome from '@/views/company/Home'
// import CompanyAddUser from '@/views/company/AddUser'

// /**
//  * Partner Routes
//  */
// import PartnerLogin from '@/views/partner/Login'
// import PartnerRegister from '@/views/partner/Register'
// import PartnerForgotPass from '@/views/partner/ForgotPass'
// import PartnerHome from '@/views/partner/Home'
// import PartnerDeal from '@/views/partner/Deal'

/**
 * admin Routes
 */
// import AdminLogin from '@/views/admin/Login'
// import AdminRegister from '@/views/admin/Register'
import AdminHome from '@/views/admin/Home'
import AdminCompanies from '@/views/admin/Companies'
import AdminPartners from '@/views/admin/Partners'
import AdminAdmins from '@/views/admin/Admins'
import AdminDeals from '@/views/admin/Deals'
import AdminEditDeal from '@/views/admin/EditDeal'
import AdminContracts from '@/views/admin/Contracts'
import AdminDeal from '@/views/admin/Deal'
import AdminContract from '@/views/admin/Contract'
import AdminAddContract from '@/views/admin/AddContract'
import AdminAddContractContd from '@/views/admin/AddContractContd'
import AdminAddUser from '@/views/admin/AddUser'
import AdminAddCompany from '@/views/admin/AddCompany'
import AdminAddPartner from '@/views/admin/AddPartner'
import AdminAddAdmin from '@/views/admin/AddAdmin'
import AdminAddDeal from '@/views/admin/AddDeal'

// Store
import UserStore from '@/store/modules/user'
import AdminStore from '@/store/modules/admin'
import PartnerStore from '@/store/modules/partner'
import CompanyStore from '@/store/modules/company'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/bug',
      name: 'Bug',
      component: Bug,
      meta: { requiresNoAuth: true }
    },
    {
      path: '/task',
      name: 'Task',
      component: Task,
      meta: { requiresNoAuth: true }
    },
    {
      path: '/signup',
      name: 'User-Register',
      component: UserRegister,
      meta: { requiresNoAuth: true }
    },
    {
      path: '/',
      name: 'User-Login',
      component: UserLogin,
      meta: { requiresNoAuth: true }
    },
    {
      path: '/forgot',
      name: 'User-ForgotPass',
      component: UserForgotPass,
      meta: { requiresNoAuth: true }
    },
    // {
    //   path: '/company/signup',
    //   name: 'CompanyRegister',
    //   component: CompanyRegister,
    //   meta: { requiresNoAuth: true }
    // },
    // {
    //   path: '/company/login',
    //   name: 'CompanyLogin',
    //   component: CompanyLogin,
    //   meta: { requiresNoAuth: true }
    // },
    // {
    //   path: '/company/forgot',
    //   name: 'CompanyForgotPass',
    //   component: CompanyForgotPass,
    //   meta: { requiresNoAuth: true }
    // },
    // {
    //   path: '/partner/signup',
    //   name: 'PartnerRegister',
    //   component: PartnerRegister,
    //   meta: { requiresNoAuth: true }
    // },
    // {
    //   path: '/partner/login',
    //   name: 'PartnerLogin',
    //   component: PartnerLogin,
    //   meta: { requiresNoAuth: true }
    // },
    // {
    //   path: '/partner/forgot',
    //   name: 'PartnerForgotPass',
    //   component: PartnerForgotPass,
    //   meta: { requiresNoAuth: true }
    // },
    // {
    //   path: '/admin/signup',
    //   name: 'AdminRegister',
    //   component: AdminRegister,
    //   meta: { requiresNoAuth: true }
    // },
    // {
    //   path: '/admin/login',
    //   name: 'AdminLogin',
    //   component: AdminLogin,
    //   meta: { requiresNoAuth: true }
    // },
    {
      path: '/user',
      redirect: '/user',
      name: 'ComfloUser',
      meta: { requiresUserAuth: true },
      component: UserLayouts,
      children: [
        {
          path: '/',
          name: 'User-Home',
          component: UserHome
        },
        {
          path: 'deals',
          name: 'User-Deals',
          component: UserDeals
        },
        {
          path: 'marketplace',
          name: 'User-Marketplace',
          component: UserMarketplace
        },
        {
          path: 'contracts',
          name: 'User-Contracts',
          component: UserContracts
        },
        {
          path: 'deals/new',
          name: 'New-User-Deal',
          component: UserAddDeal
        },
        {
          path: 'deals/edit/:id',
          name: 'User-Edit-Deal',
          component: UserEditDeal
        },
        {
          path: 'deals/:id',
          name: 'User-Deal',
          component: UserDeal
        },
        {
          path: 'contracts/:id',
          name: 'User-Contract',
          component: UserContract
        }
      ]
    },
    // {
    //   path: '/company',
    //   redirect: '/company',
    //   name: 'ComfloCompany',
    //   meta: { requiresCompanyAuth: true },
    //   component: CompanyLayouts,
    //   children: [
    //     {
    //       path: '/',
    //       name: 'Company-Home',
    //       component: CompanyHome
    //     },
    //     {
    //       path: 'add-user',
    //       name: 'Company-Add-User',
    //       component: CompanyAddUser
    //     }
    //   ]
    // },
    // {
    //   path: '/partner',
    //   redirect: '/partner',
    //   name: 'ComfloPartner',
    //   meta: { requiresPartnerAuth: true },
    //   component: PartnerLayouts,
    //   children: [
    //     {
    //       path: '/',
    //       name: 'Partner-Home',
    //       component: PartnerHome
    //     },
    //     {
    //       path: 'deals/:id',
    //       name: 'Partner-Deal',
    //       component: PartnerDeal
    //     }
    //   ]
    // },
    {
      path: '/admin',
      redirect: '/admin',
      name: 'ComfloAdmin',
      meta: { requiresAdminAuth: true },
      component: AdminLayouts,
      children: [
        {
          path: '/',
          name: 'Admin-Home',
          component: AdminHome
        },
        {
          path: 'companies',
          name: 'Admin-Companies',
          component: AdminCompanies
        },
        {
          path: 'deals',
          name: 'Admin-Deals',
          component: AdminDeals
        },
        {
          path: 'contracts',
          name: 'Admin-Contracts',
          component: AdminContracts
        },
        {
          path: 'deals/new',
          name: 'Admin-New-Deal',
          component: AdminAddDeal
        },
        {
          path: 'deals/edit/:id',
          name: 'Admin-Edit-Deal',
          component: AdminEditDeal
        },
        {
          path: 'deals/:id',
          name: 'Admin-Deal',
          component: AdminDeal
        },
        {
          path: 'contracts/new/:id',
          name: 'Admin-Add-Contract',
          component: AdminAddContract
        },
        {
          path: 'contracts/upload/:id',
          name: 'Admin-Add-Contract-Contd',
          component: AdminAddContractContd,
          props: true
        },
        {
          path: 'contracts/:id',
          name: 'Admin-Contract',
          component: AdminContract,
          props: true
        },
        {
          path: 'partners',
          name: 'Admin-Partners',
          component: AdminPartners
        },
        {
          path: 'admins',
          name: 'Admin-Admins',
          component: AdminAdmins
        },
        {
          path: 'users/new',
          name: 'Admin-Add-User',
          component: AdminAddUser
        },
        {
          path: 'companies/new',
          name: 'Admin-Add-Company',
          component: AdminAddCompany
        },
        {
          path: 'partners/new',
          name: 'Admin-Add-Partner',
          component: AdminAddPartner
        },
        {
          path: 'admins/new',
          name: 'Admin-Add-Admin',
          component: AdminAddAdmin
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: View404,
      meta: { requiresNoAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresUserAuth) && UserStore.state.is_auth === false) {
    UserStore.state.error = 'You need to log in before you can perform this action.'
    next('/')
  } else if (to.matched.some(record => record.meta.requiresCompanyAuth) && CompanyStore.state.is_auth === false) {
    CompanyStore.state.error = 'You need to log in before you can perform this action.'
    next('/company/login')
  } else if (to.matched.some(record => record.meta.requiresPartnerAuth) && PartnerStore.state.is_auth === false) {
    PartnerStore.state.error = 'You need to log in before you can perform this action.'
    next('/partner/login')
  } else if (to.matched.some(record => record.meta.requiresAdminAuth) && AdminStore.state.is_auth === false) {
    UserStore.state.error = 'You need to log in before you can perform this action.'
    next('/')
  } else {
    next()
  }

  if (to.matched.some(record => record.meta.requiresNoAuth)) {
    if (to.matched.some(record => record.path.includes('/company')) && CompanyStore.state.is_auth === true) {
      next('/company/')
    } else if (to.matched.some(record => record.path.includes('/partner')) && PartnerStore.state.is_auth === true) {
      next('/partner/')
    } else if (to.matched.some(record => record.path.includes('/admin')) && AdminStore.state.is_auth === true) {
      next('/admin/')
    } else if (to.matched.some(record => record.path.includes('/user')) && UserStore.state.is_auth === true) {
      next('/user/')
    } else {
      next()
    }
  }
})

let mixpanelConfig = {
  token: '409beb50d0480c7a0146d6a70594a3cc'
}

Vue.use(VueMultianalytics, {
  modules: {
    mixpanel: mixpanelConfig
  },
  routing: {
    vueRouter: router, //  Pass the router instance to automatically sync with router (optional)
    preferredProperty: 'name', // By default 'path' and related with vueRouter (optional)
    ignoredViews: ['homepage'] // Views that will not be tracked
    // ignoredModules: ['ga'] // Modules that will not send route change events. The event sent will be this.$ma.trackView({viewName: 'homepage'}, ['ga'])
  }
})

export default router
