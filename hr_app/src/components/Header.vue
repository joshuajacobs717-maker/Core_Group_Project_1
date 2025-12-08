<script setup>

</script>

<template>
  <div id="nav">

      <router-link to="/attendance" class="link">Attendance</router-link>
      <router-link to="/employeeinfo" class="link">Employee Info</router-link>
      <router-link to="/payroll" class="link">Payroll</router-link>
      <router-link to="/payrolltable" class="link">Payroll Table</router-link>
      <router-link to="/dashboard" class="link">Dashboard</router-link>
    </div>
    <router-view></router-view>
</template>

<style scoped>
#nav{
  border: none ;
  border-radius: 5px;
  background-color: #8BAE66;
  padding: 15px;
  display: flex;
  gap: 20px; 
  
}
.link {
  text-decoration: none; 
  color: #1B211A;
  padding: 10px;
  border-radius: 5px;
}

.link:hover{
  background-color: #628141;
  color: #EBD5AB;
}
</style>
