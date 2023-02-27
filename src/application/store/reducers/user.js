import * as userActions from '../actions/user';

const initialState = {
    username: "Hamzat Mazeedah",
    enrollingUser: null,
    employees: [
        {
            id: 1,
            biodata: {
                lastName: "Olanite",
                firstName: " Olalekan",
                date: "11/05/23",
            },
            status: "Progress"
        },
        {
            id: 2,
            biodata: {
                lastName: "Aderibigbe",
                firstName: "Fasasi",
                date: "12/03/23",
            },
            status: "Finished"
        },
        {
            id: 3,
            biodata: {
                lastName: "Folake",
                firstName: "Bisi",
                date: "12/03/23",
            },
            status: "Enrolled"
        },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case (userActions.SELECT_EMPLOYEE_TO_ENROLL):
            return { ...state, enrollingUser: action.payload };
        case (userActions.ADD_EMPLOYEE_BIODATA):
            const employee = state.employees.find(e => e.id == action.payload.employeeId);
            employee = { ...employee, biodata: action.payload.data }
            return { ...state };
        case (userActions.ADD_EMPLOYEE_NEXTOFKIN):
            const employee2 = state.employees.find(e => e.id == action.payload.employeeId);
            employee2 = { ...employee2, nextOfKin: action.payload.data }
            return { ...state };
        case (userActions.ADD_EMPLOYEE_SERVICE_RECORD):
            const employee3 = state.employees.find(e => e.id == action.payload.employeeId);
            employee3 = { ...employee3, serviceRecord: action.payload.data }
            return { ...state };
        case (userActions.ADD_EMPLOYEE_FINANCIAL_RECORD):
            const employee4 = state.employees.find(e => e.id == action.payload.employeeId);
            employee4 = { ...employee4, financialRecord: action.payload.data }
            return { ...state };
        default:
            return state;
    }
}

