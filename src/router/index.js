import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'
import Profile from '../views/Profile.vue'
import DashboardAnalytics from '../views/DashboardAnalytics.vue'
import SettingsGeneral from '../views/SettingsGeneral.vue'
import SettingsSecurity from '../views/SettingsSecurity.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      breadcrumb: 'Home'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
      breadcrumb: 'Dashboard'
    },
    children: [
      {
        path: '',
        name: 'DashboardIndex',
        component: Dashboard,
        meta: {
          title: 'Dashboard',
          breadcrumb: 'Dashboard'
        }
      },
      {
        path: 'analytics',
        name: 'DashboardAnalytics',
        component: DashboardAnalytics,
        meta: {
          title: 'Analytics',
          breadcrumb: 'Analytics'
        }
      }
    ]
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      title: 'Settings',
      breadcrumb: 'Settings'
    },
    children: [
      {
        path: '',
        name: 'SettingsIndex',
        component: Settings,
        meta: {
          title: 'Settings',
          breadcrumb: 'Settings'
        }
      },
      {
        path: 'general',
        name: 'SettingsGeneral',
        component: SettingsGeneral,
        meta: {
          title: 'General Settings',
          breadcrumb: 'General'
        }
      },
      {
        path: 'security',
        name: 'SettingsSecurity',
        component: SettingsSecurity,
        meta: {
          title: 'Security Settings',
          breadcrumb: 'Security'
        }
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile',
      breadcrumb: 'Profile'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
