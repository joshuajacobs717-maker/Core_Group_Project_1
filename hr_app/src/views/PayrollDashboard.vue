<script setup>
import { ref, computed, watch } from 'vue'
import payrollData from '../data/payroll_data.json'
import PayrollTable from './PayrollTable.vue'

const payroll = ref(payrollData)
const search = ref("")
const selectedEmployee = ref(null)

const filtered = computed(() =>
  payroll.value.filter(p =>
    p.employeeId.toString().includes(search.value)
  )
)

const openPayslip = (employee) => {
  selectedEmployee.value = employee
}
</script>

<template>

  <div class="payroll-container">
    <h1>Payroll Management</h1>

    <input
      type="text"
      placeholder="Search by Employee ID"
      v-model="search"
      class="search-input"
    />

    <PayrollTable
      :payroll="filtered"
      @view-payslip="openPayslip"
    />
  </div>
</template>