<script setup>
import jsPDF from 'jspdf'

const downloadPayslip = () => {
  const e = props.employee
  const doc = new jsPDF()

  doc.setFontSize(20)
  doc.text("Employee Payslip", 20,20)

    doc.setFontSize(12)
  doc.text(`Employee ID: No.${e.employeeId}`, 20, 40)
  doc.text(`Hours Worked: ${e.hoursWorked} hours`, 20, 50)
  doc.text(`Leave Deductions: ${e.leaveDeductions}`, 20, 60)
  doc.text(`Final Salary: R${e.finalSalary}`, 20, 70)

  doc.save(`Payslip_${e.employeeId}.pdf`)
}


const props = defineProps({
  employee: {
    type: Object,
    default: () => null
  }
})

const emit = defineEmits(['close'])
</script>

<template>
    <div class="modal-bg">
     <div class="modal">


    <h2>Payslip • Employee {{ props.employee?.employeeId ?? '—' }}</h2>


    <p><strong>Hours Worked:</strong> {{ props.employee?.hoursWorked ?? '—' }} hours</p>
    <p><strong>Leave Deductions:</strong> {{ props.employee?.leaveDeductions ?? '—' }}</p>
    <p><strong>Final Salary:</strong> R{{ props.employee?.finalSalary ?? '—' }}</p>

    <button class="close-btn" @click="$emit('close')">
      Close
    </button>

    <button class="download-btn" @click="downloadPayslip">
  Download Payslip (PDF)
</button>


    </div>
   </div>
</template>

<style>
.modal-bg {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.4);
display: flex;
justify-content: center;
align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
}

h2 {
  color: #628141;
}

p {
margin: 6px 0;
}


.close-btn {
  background: #628141;
  color: white;
  padding: 8px;
  border-radius: 6px;
  border: none;
  width: 100%;
}
.download-btn {
  background-color: #628141;
  color: white;
  padding: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 5px;
  border: none;
}
</style>