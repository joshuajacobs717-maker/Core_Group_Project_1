import {createStore} from 'vuex'
import employee_infoPage from './employee_info.json'
import attendancePage from './attendance.json'
import employee_payrollPage from './payroll_data.json'
const store = createStore({
    state:{
        workers: employee_infoPage.employeeInformation,
        employeesAttendance: attendancePage.attendanceAndLeave,
        employeePayroll:employee_payrollPage.payrollData
    },
    getters:{

    },
    mutations:{

    },
    actions:{

    }
})
export default store