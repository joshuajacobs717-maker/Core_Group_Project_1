<script setup>
import { ref, computed } from 'vue'
import payrollData from '@/data/payroll_data.json'

import PayrollTable from '@/views/PayrollTable.vue'
import PayrollModal from '@/views/PayrollModal.vue'


const payroll = ref(payrollData.payrollData || [])
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

  <div class="card">

    <input
      type="text"
      placeholder="Search by Employee ID"
      v-model="search"
      class="search-input"
    />
  </div>

  <div class="card">
    <h2 class="card-title">Payroll Overview</h2>

    <PayrollTable
      :payroll="filtered"
      @view-payslip="openPayslip"
    />
  </div>
  <PayrollModal
    v-if="selectedEmployee"
    :employee="selectedEmployee"
    @close="selectedEmployee = null"
  />
</div>    
</template>
<style>
.payroll-table {
  width: 100%;
  border-collapse: collapse; 
}

th, td {
  padding: 12px 15px;       
  text-align: left;        
  border-bottom: 1px solid #e2e8f0;
}

th {
  background-color: #628141;
  color: white;
  font-weight: bold;
}

td.numeric {
  text-align: right;      
}

tr:hover {
  background-color: #f1f5f9; 
}

h1, h2{
  color: #628141;
}
.search-input {
  padding: 10px;
  border-radius: 5px;
}

</style>