<script setup>
</script>

<template>
  <div class="about-page">

    <section class="page-header">
      <h1> About ModernTech Solutions</h1>
      <p>Innovating healthcare software since 2010</p>
    </section>

    <section class="section">
      <h2>Who We Are</h2>
      <p>
        ModernTech Solutions is a software development company founded in 2010.
        What started as a small start-up with just 20 employees has grown into a 
        thriving organisation with over 250 employees across multiple departments. 
      </p>
    </section>

    <section class="section light">
      <h2>Our Departments</h2>
      <ul class="departments">
        <li>Software Development</li>
        <li>Quality Assurance</li>
        <li>Customer Support</li>
        <li>Sales</li>
        <li>Marketing</li>
        <li>Human Resources</li>
      </ul>
    </section>

    <section class="section light">
      <h2>Our Growth Journey</h2>
      <ul class="timeline">
        <li><strong>2010:</strong> Company founded with 20 employees</li>
        <li><strong>2015:</strong> Expansion into advanced healthcare systems</li>
        <li><strong>2020:</strong> Workforce grew to 150 employees</li>
        <li><strong>2025:</strong> Over 200 employees and growing</li>
      </ul>
    </section>

    <section class="section warning">
      <h2>Our Internal Challenge</h2>
      <p>
        As the company expanded rapidly, our HR processes did not evolve at the 
        same pace. Employee data, attendance, and payroll were managed using disconnected spreadsheets and manual processes, resulting in 
        inefficiencies and data inconsistencies.
      </p>
    </section>

  </div>
</template>

<style scoped>
.about-page {
  padding: 40px;
  font-family: Arial, sans-serif;
  color: #1B211A;
}

/* Page header */
.page-header {
  text-align: center;
  padding: 30px;
  background: #628141; /* green */
  color: white;
  border-radius: 12px;
  margin-bottom: 40px;
}

h1{
  color: white;
}

/* General section layout */
.section {
  margin-bottom: 40px;
  padding: 25px;
  background: #F8F5EE;
  border-left: 5px solid #628141;
  border-radius: 8px;
}

/* Light themed sections */
.light {
  background: #EBD5AB; /* beige */
  border-left-color: #628141;
}

/* Warning section */
.warning {
  background: #fff4e3;
  border-left: 5px solid #628141;
}

/* Section headers */
.section h2 {
  color: #628141; /* green */
  margin-bottom: 15px;
}

/* Departments list */
.departments {
  list-style: none;
  padding: 0;
}

.departments li {
  padding: 6px 0;
  border-bottom: 1px solid #c4b694;
}

/* Timeline list */
.timeline {
  list-style: none;
  padding: 0;
}

.timeline li {
  padding: 8px 0;
  border-left: 3px solid #628141;
  padding-left: 12px;
  margin-bottom: 10px;
  color: #333;
}
</style>
