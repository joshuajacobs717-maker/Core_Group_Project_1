<script setup>
defineProps({
  payroll: Array
})

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
      <tr v-for="row in payroll" :key="row.employeeId">
        <td>{{ row.employeeId }}</td>
        <td>{{ row.hoursWorked }}</td>
        <td>{{ row.leaveDeductions }}</td>
        <td>{{ row.finalSalary }}</td>
        <td>
          <button @click="$emit('view-payslip', row)">View</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>  