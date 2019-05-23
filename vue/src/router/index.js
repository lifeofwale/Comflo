import Vue from 'vue'
import Router from 'vue-router'
import VueMultianalytics from 'vue-multianalytics'

// LAYOUTS
import UserLayouts from '@/components/user/UserLayouts'
import AdminLayouts from '@/components/admin/AdminLayouts'

// Views
import View404 from '@/views/404'
/**
 * reporting routes
 */
import Bug from '@/views/user/Bug'
import Task from '@/views/user/Task'

/**
 * User Routes
 */

// AUTH
import UserLogin from '@/views/user/auth/Login'
import UserKyc from '@/views/user/auth/Kyc'
import UserVerify from '@/views/user/auth/Verify'
import UserWelcome from '@/views/user/auth/Welcome'
import UserRegister from '@/views/user/auth/Register'
import UserForgotPass from '@/views/user/auth/ForgotPass'

// DASHBOARD
import UserDashboard from '@/views/user/dashboard/Home'
import UserAddTransaction from '@/views/user/dashboard/NewTransaction'
import UserTransactions from '@/views/user/dashboard/Transactions'
import UserTransaction from '@/views/user/dashboard/Transaction'
import UserMarketplace from '@/views/user/dashboard/Marketplace'
// import UserContracts from '@/views/user/Contracts'
// import UserContract from '@/views/user/Contract'
// import UserEditTransaction from '@/views/user/EditDeal'

// PROFILE
import UserSupport from '@/views/user/profile/Support'
import UserProfile from '@/views/user/profile/Profile'
/**
 * admin Routes
 */
import AdminUsers from '@/views/admin/dashboard/Users'
import NewAdmin from '@/views/admin/dashboard/NewAdmin'
import AdminCompanies from '@/views/admin/dashboard/Companies'
import AdminCompany from '@/views/admin/dashboard/Company'
import AdminTransactions from '@/views/admin/dashboard/Transactions'
import AdminTransaction from '@/views/admin/dashboard/Transaction'
import AdminAddContract from '@/views/admin/dashboard/AddContract'
import AdminAddContractContd from '@/views/admin/dashboard/AddContractContd'

// import AdminPartners from '@/views/admin/Partners'
// import AdminAdmins from '@/views/admin/Admins'
// import AdminContracts from '@/views/admin/Contracts'
// import AdminEditTransaction from '@/views/admin/dashboard/EditTransaction'
// import AdminContract from '@/views/admin/Contract'
// import AdminAddCompany from '@/views/admin/AddCompany'
// import AdminAddPartner from '@/views/admin/AddPartner'
// import AdminAddAdmin from '@/views/admin/AddAdmin'
// import AdminAddDeal from '@/views/admin/AddDeal'

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
      path: '/verify',
      name: 'User-Verify',
      component: UserVerify,
      meta: { requiresUserAuth: true }
    },

    {
      path: '/welcome',
      name: 'User-Welcome',
      component: UserWelcome,
      meta: { requiresUserAuth: true, kycFilled: true }
    },
    {
      path: '/forgot',
      name: 'User-ForgotPass',
      component: UserForgotPass,
      meta: { requiresNoAuth: true }
    },
    {
      path: '/kyc',
      name: 'User-Kyc',
      component: UserKyc,
      meta: { requiresUserAuth: true, kycFilled: true }
    },
    {
      path: '/register',
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
          component: UserDashboard
        },
        {
          path: 'support',
          name: 'User-Support',
          component: UserSupport
        },
        {
          path: 'profile',
          name: 'User-Profile',
          component: UserProfile
        },
        {
          path: 'marketplace',
          name: 'User-Marketplace',
          component: UserMarketplace
        },
        {
          path: 'transactions',
          name: 'User-Transactions',
          component: UserTransactions
        },

        {
          path: 'transactions/new',
          name: 'New-User-Transaction',
          component: UserAddTransaction
        },
        {
          path: 'transactions/:id',
          name: 'User-Transaction',
          component: UserTransaction
        }
        // {
        //   path: 'contracts',
        //   name: 'User-Contracts',
        //   component: UserContracts
        // },
        // {
        //   path: 'transactions/edit/:id',
        //   name: 'User-Edit-Transaction',
        //   component: UserEditTransaction
        // },
        // {
        //   path: 'contracts/:id',
        //   name: 'User-Contract',
        //   component: UserContract
        // }
      ]
    },
    {
      path: '/admin',
      redirect: '/admin',
      name: 'ComfloAdmin',
      meta: { requiresAdminAuth: true },
      component: AdminLayouts,
      children: [
        {
          path: '/',
          name: 'Admin-Users',
          component: AdminUsers
        },
        {
          path: 'new',
          name: 'New-Admin',
          component: NewAdmin
        },
        {
          path: 'companies',
          name: 'Admin-Companies',
          component: AdminCompanies
        },
        {
          path: 'companies/:id',
          name: 'Admin-Company',
          component: AdminCompany
        },
        {
          path: 'transactions',
          name: 'Admin-Transactions',
          component: AdminTransactions
        },
        {
          path: 'transactions/:id',
          name: 'Admin-Transaction',
          component: AdminTransaction
        },
        {
          path: 'contracts/upload/:id',
          name: 'Admin-Add-Contract-Contd',
          component: AdminAddContractContd,
          props: true
        },
        {
          path: 'contracts/new/:id',
          name: 'Admin-Add-Contract',
          component: AdminAddContract
        }
        // {
        //   path: 'deals/new',
        //   name: 'Admin-New-Deal',
        //   component: AdminAddDeal
        // },
        // {
        //   path: 'deals/edit/:id',
        //   name: 'Admin-Edit-Deal',
        //   component: AdminEditDeal
        // },
        // {
        //   path: 'contracts',
        //   name: 'Admin-Contracts',
        //   component: AdminContracts
        // },
        // {
        //   path: 'contracts/:id',
        //   name: 'Admin-Contract',
        //   component: AdminContract,
        //   props: true
        // },
        // {
        //   path: 'partners',
        //   name: 'Admin-Partners',
        //   component: AdminPartners
        // },
        // {
        //   path: 'admins',
        //   name: 'Admin-Admins',
        //   component: AdminAdmins
        // },
        // {
        //   path: 'users/new',
        //   name: 'Admin-Add-User',
        //   component: AdminAddUser
        // },
        // {
        //   path: 'companies/new',
        //   name: 'Admin-Add-Company',
        //   component: AdminAddCompany
        // },
        // {
        //   path: 'partners/new',
        //   name: 'Admin-Add-Partner',
        //   component: AdminAddPartner
        // },
        // {
        //   path: 'admins/new',
        //   name: 'Admin-Add-Admin',
        //   component: AdminAddAdmin
        // }
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
  console.log(CompanyStore.state.is_auth)
  if (to.matched.some(record => record.meta.requiresUserAuth) && UserStore.state.is_auth === false) {
    UserStore.state.error = 'You need to log in before you can perform this action.'
    next('/')
  // } else if (to.matched.some(record => record.meta.requiresCompanyAuth) && CompanyStore.state.is_auth === false) {
  //   CompanyStore.state.error = 'You need to log in before you can perform this action.'
  //   next('/company/login')
  // } else if (to.matched.some(record => record.meta.requiresPartnerAuth) && PartnerStore.state.is_auth === false) {
  //   PartnerStore.state.error = 'You need to log in before you can perform this action.'
  //   next('/partner/login')
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
    } else if (to.matched.some(record => record.path.includes('/register') || record.path.includes('/forgot') || record.path === '') && UserStore.state.is_auth === true) {
      next('/user/')
    } else {
      next()
    }
  }

  if (to.matched.some(record => record.meta.kycFilled)) {
    console.log('kyc filled')
    console.log(CompanyStore.state)
    if (to.matched.some(record => record.path.includes('/kyc')) && CompanyStore.state.company.kyc_documents != null && CompanyStore.state.company.kyc_documents.length > 1) {
      next('/user/')
    }
    if (to.matched.some(record => record.path.includes('/welcome')) && CompanyStore.state.company.kyc_documents != null && CompanyStore.state.company.kyc_documents.length > 1) {
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
