export const SELECT_EMPLOYEE_TO_ENROLL = 'select employee to enroll';
export const ADD_EMPLOYEE_BIODATA = 'add employee biodata';
export const ADD_EMPLOYEE_NEXTOFKIN = 'add employee next of kin';
export const ADD_EMPLOYEE_SERVICE_RECORD = 'add employee service record';
export const ADD_EMPLOYEE_FINANCIAL_RECORD = 'add employee financial record';

export const selectEmployee = employeeId =>({
    type: SELECT_EMPLOYEE_TO_ENROLL,
    payload: employeeId,
});

export const addEmployeeBiodata = payload =>({
    type: ADD_EMPLOYEE_BIODATA,
    payload,
});


export const addEmployeeNextOfKin = payload =>({
    type: ADD_EMPLOYEE_NEXTOFKIN,
    payload,
});


export const addEmployeeServiceRecord = payload =>({
    type: ADD_EMPLOYEE_SERVICE_RECORD,
    payload,
});


export const addEmployeeFinancialRecord = payload =>({
    type: ADD_EMPLOYEE_FINANCIAL_RECORD,
    payload,
});
