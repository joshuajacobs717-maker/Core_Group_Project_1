<script setup>
import { ref } from "vue";
</script>

<template>
  <div id="nav">
    <router-link to="/home" class="link">
      <span class="icon">⌂</span>
      <span class="link-text">Home</span>
    </router-link>
    <router-link to="/attendance" class="link">
      <span class="icon">🗓</span>
      <span class="link-text">Attendance</span>
    </router-link>
    <router-link to="/employeeinfo" class="link">
      <span class="icon">𐀪</span>
      <span class="link-text">Employee Info</span>
    </router-link>
    <router-link to="/payroll" class="link">
      <span class="icon">$</span>
      <span class="link-text">Payroll</span>
    </router-link>
    <router-link to="/about" class="link">
      <span class="icon">ℹ</span>
      <span class="link-text">About</span>
    </router-link>
  </div>
</template>

<style scoped>
#nav {
  width: 50px; /* collapsed width */
  height: 100vh;
  background-color: #8BAE66;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 0;
  transition: width 0.3s;
  overflow: hidden;
}

#nav:hover {
  width: 220px; /* expanded width */
}

.link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1B211A;
  padding: 8px;
  border-radius: 5px;
  transition: background 0.2s;
}

.link:hover {
  background-color: #628141;
  color: #EBD5AB;
}

/* Icons always visible */
.icon {
  font-size: 1.2em;
  margin-right: 10px;
}

/* Hide text when collapsed */
.link-text {
  opacity: 0;
  white-space: nowrap;
  transition: opacity 0.3s;
}

/* Show text on hover of sidebar */
#nav:hover .link-text {
  opacity: 1;
}
</style>
