<script setup>
import { reactive, computed, ref } from "vue";

import AttendanceList from "../data/attendance.json";

// Reactive employees array
const employees = reactive(AttendanceList.attendanceAndLeave);

// Dropdown for sorting leave requests
const sortOption = ref("pending-first");

// Define sorting orders
const sortOrders = {
  "pending-first": { Pending: 1, Approved: 2, Denied: 3 },
  "approved-first": { Approved: 1, Pending: 2, Denied: 3 },
  "denied-first": { Denied: 1, Pending: 2, Approved: 3 }
};

// Computed array: sort leaveRequests per employee based on selection
const sortedEmployees = computed(() =>
  employees.map(attent => {
    const order = sortOrders[sortOption.value] || {};
    const sortedLeaves = [...attent.leaveRequests].sort((a, b) => {
      return (order[a.status] || 99) - (order[b.status] || 99);
    });
    return { ...attent, leaveRequests: sortedLeaves };
  })
);

// Approve leave
function approveLeave(attentId, index) {
  const attent = employees.find(e => e.employeeId === attentId);
  if (attent) attent.leaveRequests[index].status = "Approved";
}

// Decline leave
function declineLeave(attentId, index) {
  const attent = employees.find(e => e.employeeId === attentId);
  if (attent) attent.leaveRequests[index].status = "Denied";
}
</script>

<template>
  <div class="page">


    <h1 class="main-title">Employee Attendance & Leave Management</h1>

    <!-- Sorting Dropdown -->
    <div class="sort-box">
      <label>Sort Leave By:</label>
      <select class="select-bar" v-model="sortOption">
        <option value="pending-first">Pending → Approved → Denied</option>
        <option value="approved-first">Approved → Pending → Denied</option>
        <option value="denied-first">Denied → Pending → Approved</option>
      </select>
    </div>

    <!-- Employee Cards -->
    <div class="cards-container">
    <div v-for="attent in sortedEmployees" :key="attent.employeeId" class="employee-card">
      <div class="emp-header">
        <h2>{{ attent.name }}</h2>
        <span class="emp-id">Employee ID: {{ attent.employeeId }}</span>
      </div>

      <!-- Attendance Table -->
      <div class="section">
        <h3>Attendance</h3>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(att, i) in attent.attendance" :key="i">
              <td>{{ att.date }}</td>
              <td :class="['tag', att.status.toLowerCase()]">{{ att.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Leave Requests Table -->
      <div class="section">
        <h3>Leave Requests</h3>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(leave, index) in attent.leaveRequests" :key="index">
              <td>{{ leave.date }}</td>
              <td>{{ leave.reason }}</td>
              <td>
                <span :class="['tag', leave.status.toLowerCase()]">{{ leave.status }}</span>
              </td>
              <td>
                <div v-if="leave.status === 'Pending'" class="btn-group">
                  <button class="approve-btn" @click="approveLeave(attent.employeeId, index)">Approve</button>
                  <button class="decline-btn" @click="declineLeave(attent.employeeId, index)">Decline</button>
                </div>
                <div v-else class="no-action">—</div>
              </td>
            </tr>
            <tr v-if="attent.leaveRequests.length === 0">
              <td colspan="4" class="no-leave">No leave requests</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>
</template>

<style>
.sort-box{
  border-radius: 5px;
  padding: 10px;
}

.select-bar{
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #628141;
  margin-bottom: 10px;
}



.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.employee-card {
  background-color: #f3f3f3;
  border: 1px solid #e6e6e7;
  border-radius: 8px;
  padding: 12px;
  width: 20%; /* smaller cards, 5 per row approx */
  box-shadow: 0 5px 6px #628141;
  box-sizing: border-box;
  font-size: 0.85em; /* smaller text inside cards */
}

.employee-card h2 {
  margin: 0 0 5px 0;
  font-size: 1em;
  color: #628141;
}

.emp-id {
  font-size: 0.75em;
  color: #555;
}

.section {
  margin-top: 10px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8em;
}

.styled-table th, .styled-table td {
  padding: 5px 8px;
  border-bottom: 1px solid #e2e8f0;
}

.styled-table thead{

  background-color: #628141;
}

.tag {
  padding: 2px 6px;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  font-size: 0.75em;
}

.tag.pending { background-color: #f59e0b; }
.tag.approved { background-color: #10b981; }
.tag.denied { background-color: #ef4444; }

/* Button styles */
.btn-group button {
  margin-right: 5px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75em;
  transition: background 0.2s;
}

.approve-btn {
  background-color: #10b981;
  color: white;
}

.approve-btn:hover {
  background-color: #0f815f;
}

.decline-btn {
  background-color: #ef4444;
  color: white;
}

.decline-btn:hover {
  background-color: #c43030;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .employee-card { width: 28%; } /* 3 per row */
}

@media (max-width: 900px) {
  .employee-card { width: 45%; } /* 2 per row */
}

@media (max-width: 600px) {
  .employee-card { width: 100%; } /* 1 per row */
}


</style>