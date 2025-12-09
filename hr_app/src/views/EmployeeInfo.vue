<script setup>
import Header from '@/components/Header.vue'
import employeesData from '../data/employee_info.json'
const employees = employeesData.employeeInformation
</script>

<template>
 
  <div class="container">
    <h1>Employee Information</h1>

    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Position</th>
        <th>Department</th>
        <th>Salary</th>
        <th>History</th>
        <th>Contact</th>
      </tr>

      <tr v-for="emp in employees" :key="emp.employeeId">
        <td>{{ emp.employeeId }}</td>
        <td>{{ emp.name }}</td>
        <td>{{ emp.position }}</td>
        <td>{{ emp.department }}</td>
        <td>{{ emp.salary }}</td>
        <td>{{ emp.employmentHistory }}</td>
        <td>{{ emp.contact }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  color: #628141;
}


table {
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

tr:hover {
  background-color: #ebd5ab; 

}

</style>