<script setup>
const props = defineProps({
  payroll: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['view-payslip'])
</script>

<template>

  <table class="payroll-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Hours</th>
        <th>Leave</th>
        <th>Final Salary</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      <tr v-if="!props.payroll || props.payroll.length === 0">
        <td colspan="5" class="text-center">No payroll records</td>
      </tr>

      <tr class="info-row" v-for="row in props.payroll" :key="row.employeeId">
        <td>No.{{ row.employeeId }}</td>
        <td>{{ row.hoursWorked }} hours</td>
        <td>{{ row.leaveDeductions }}</td>
        <td>R{{ row.finalSalary }}</td>
        <td>
          <button type="button" class="view-btn" @click="emit('view-payslip', row)">View</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>  

<style>
.payroll-table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: #628141;
  color: white;
  padding: 10px;
}

td {
  padding: 10px;
  border-bottom: 1px solid #e2e8f0;
}

.view-btn {
  padding: 6px 12px;
  background: #628141;
  color: white;
  border: none;
  border-radius: 4px;
}
.info-row:hover {
  background-color: #ebd5ab;

}
</style>