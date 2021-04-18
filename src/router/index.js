import { createRouter, createWebHistory } from 'vue-router'
import AccountSetting from '../views/Account-setting.vue'
import Overview from '../components/Overview.vue'
import EmailNotification from '../components/Email-notification.vue'
import AccountClosure from '../components/Account-closure.vue'

const routes = [
  {
    path: '/account-setting',
    name: 'Account Setting',
    component: AccountSetting,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: 'overview', component: Overview , name: 'Overview'},
      { path: 'email-notification', component: EmailNotification , name: 'Email Notification'},
      { path: 'account-closure', component: AccountClosure, name: 'Account Closure' },

      // ...other sub routes
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
