<script setup>
import { ref, computed, onMounted } from "vue";
import Chart from "chart.js/auto";


import payrollDataFile from "@/data/payroll_data.json";
import attendanceDataFile from "@/data/attendance.json";

const payroll = ref(payrollDataFile.payrollData);
const attendance = ref(attendanceDataFile.attendanceAndLeave);

const totalEmployees = computed(() => payroll.value.length);

const averageSalary = computed(() => {
  const total = payroll.value.reduce((sum, emp) => sum + emp.finalSalary, 0);
  return Math.round(total / payroll.value.length);
});

const totalLeaveRequests = computed(() => {
  return attendance.value.reduce(
    (sum, emp) => sum + emp.leaveRequests.length,
    0
  );
});

const attendancePercentage = computed(() => {
  let totalRecords = 0;
  let presentCount = 0;

  attendance.value.forEach((emp) => {
    emp.attendance.forEach((day) => {
      totalRecords++;
      if (day.status === "Present") presentCount++;
    });
  });

  return Math.round((presentCount / totalRecords) * 100);
});

let chartRef = ref(null);

onMounted(() => {
  const ctx = document.getElementById("salaryChart");

  chartRef.value = new Chart(ctx, {
    type: "bar",
    data: {
      labels: payroll.value.map((e) => "Emp " + e.employeeId),
      datasets: [
        {
          label: "Final Salary",
          data: payroll.value.map((e) => e.finalSalary),
          backgroundColor: "#c9ff90", 
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
</script>

<template>
  <div class="dashboard_container">
    <!-- SUMMARY CARDS -->
    <div class="cards_container">
      <div class="card">
        <h3>Total Employees</h3>
        <p>{{ totalEmployees }}</p>
      </div>

      <div class="card">
        <h3>Average Salary</h3>
        <p>R {{ averageSalary }}</p>
      </div>

      <div class="card">
        <h3>Total Leave Requests</h3>
        <p>{{ totalLeaveRequests }}</p>
      </div>

      <div class="card">
        <h3>Attendance Rate</h3>
        <p>{{ attendancePercentage }}%</p>
      </div>
    </div>
    <!-- SALARY CHART -->
    <div class="chart_card">
      <h2>Salary Overview</h2>
      <div class="chart_box">
        <canvas id="salaryChart"></canvas>
      </div>
    </div>
    <!-- ATTENDANCE TABLE -->
    <div class="table_card">
      <h2>Attendance (Last 5 Days)</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <template v-for="emp in attendance" :key="emp.employeeId">
            <tr 
              v-for="day in emp.attendance.slice(-5)" 
              :key="day.date"
            >
              <td>{{ emp.name }}</td>
              <td>{{ day.date }}</td>
              <td :class="day.status">{{ day.status }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <!-- LEAVE REQUESTS -->
    <div class="leave_card">
      <h2>Leave Requests</h2>

      <div class="leave_list">
        <div v-for="emp in attendance" :key="emp.employeeId" class="leave_item">
          <h4>{{ emp.name }}</h4>

          <ul>
            <li
              v-for="request in emp.leaveRequests"
              :key="request.date"
              :class="request.status"
            >
              {{ request.date }} — {{ request.reason }} ({{ request.status }})
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.dashboard_container {
  padding: 20px;
  display: grid;
  gap: 20px;
  
}

/* Summary cards grid */
.cards_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 6px 7px #8BAE66;
  text-align: center;
}

.card h3 {
  margin-bottom: 10px;
  font-weight: bold;
}

.card p {
  font-size: 22px;
  font-weight: 700;
}

/* Salary Chart */
.chart_card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px #8BAE66;
}

.chart_box {
  width: 100%;
  height: 350px;
}

/* Attendance Table */
.table_card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px #8BAE66;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

tr:hover{
  background-color: #EBD5AB;
}

.Present {
  color: green;
  font-weight: bold;
}

.Absent {
  color: red;
  font-weight: bold;
}

/* LEAVE LIST */
.leave_card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px #8BAE66;
}

.leave_item:hover{
  background-color: #ddd;
}

.leave_list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.leave_item {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px #8BAE66;
}

.Approved {
  color: green;
}

.Pending {
  color: orange;
}

.Denied {
  color: red;
}
</style>
