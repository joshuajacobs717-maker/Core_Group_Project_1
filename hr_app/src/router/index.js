import { createRouter, createWebHistory } from 'vue-router'

import Attendance from '@/views/Attendance.vue'
import EmployeeInfo from '@/views/EmployeeInfo.vue'
import PayrollDashboard from '@/views/PayrollDashboard.vue'
import PayrollTable from '@/views/PayrollTable.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
 
  { path: '/attendance', component: Attendance },
  { path: '/employeeinfo', component: EmployeeInfo },
  { path: '/payroll', component: PayrollDashboard },
  { path: '/payrolltable', component: PayrollTable },
  { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
