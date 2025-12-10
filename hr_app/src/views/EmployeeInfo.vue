<script setup>
import { ref, computed } from "vue";
import employeesData from "../data/employee_info.json";

const employees = ref(employeesData.employeeInformation);


const searchQuery = ref("");
const searchBy = ref("name");

const filteredEmployees = computed(() => {
  if (!searchQuery.value) return employees.value;

  return employees.value.filter((emp) => {
    const query = searchQuery.value.toLowerCase();

    if (searchBy.value === "id") {
      return emp.employeeId.toString().includes(query);
    } else if (searchBy.value === "name") {
      return emp.name.toLowerCase().includes(query);
    } else if (searchBy.value === "department") {
      return emp.department.toLowerCase().includes(query);
    }
  });
});
</script>

<template>
  <div class="container">
    <h1>Employee Information</h1>

    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search employees..."
      />
      <select v-model="searchBy">
        <option value="id">ID</option>
        <option value="name">Name</option>
        <option value="department">Department</option>
      </select>
      <button @click="searchQuery = ''">Clear</button>
    </div>
    <div class="table_container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Department</th>
          <th>Salary</th>
          <th>History</th>
          <th>Contact</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="emp in filteredEmployees" :key="emp.employeeId">
          <td>{{ emp.employeeId }}</td>
          <td>{{ emp.name }}</td>
          <td>{{ emp.position }}</td>
          <td>{{ emp.department }}</td>
          <td>{{ emp.salary }}</td>
          <td>{{ emp.employmentHistory }}</td>
          <td>{{ emp.contact }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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


.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

select:hover{
  background-color: #8BAE66;
  color: white;
}

.search-bar input,
.search-bar select,
.search-bar button {
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #8BAE66;
  font-size: 14px;
}

.search-bar button {
  background-color: #8BAE66;
  color: white;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #628141;
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

.table_container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;
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

/* Responsive font and padding */
@media (max-width: 768px) {
  th, td {
    padding: 8px 10px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  th, td {
    padding: 6px 8px;
    font-size: 12px;
  }
}
</style>
