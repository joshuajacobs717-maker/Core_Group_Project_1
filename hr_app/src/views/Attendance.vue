<script setup>

import AttendanceList from '../data/attendance.json'
const employees =  AttendanceList.attendanceAndLeave
</script>

<template>

  <div class="container">
    <h1>Attendance</h1>

    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
        <th>Date</th>
        
      </tr>

      <tr v-for="attent in employees" :key="attent.employeeId">
        <td>{{ attent.employeeId }}</td>
        <td>{{ attent.name }}</td>
        <td>{{ attent.attendance[0].status }}</td>
        <td>{{ attent.attendance[0].date }}</td>
      </tr>
    </table>
  </div>
</template>