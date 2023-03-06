import * as userActions from '../actions/user';

const initialState = {
    username: "Hamzat Mazeedah",
    email: "mazeedah@gmail.com",
    password: "test",
    enrollingUser: null,
    role: "admin",
    employees: [
        {
            id: 1,
            biodata: {
                dob: "2023-02-09",
                emailAddress: "mazeedahhamzat@gmail.com",
                firstName: "Mazeedah",
                gender: "male",
                lastName: "Hamzat",
                lga: "Kajola",
                maritalStatus: "Single",
                otherName: "Reo",
                perCity: "Abeokuta",
                perHouseNumber: "36b",
                perStreetName: "Gbonogu",
                phoneNumber: "09055220828",
                resCity: "Abeokuta",
                resHouseNumber: "36b",
                resStreetName: "Gbonogu",
                residenceLga: "Kajola",
                stateOfOrigin: "Oyo",
                stateOfResidence: "ondo",
                title: "MR.",
            },
            status: "Progress",

        },
        {
            id: 2,
            biodata: {
                dob: "2023-02-09",
                emailAddress: "mazeedahhamzat@gmail.com",
                firstName: "Teslim",
                gender: "male",
                lastName: "Gbamgbose",
                lga: "Kajola",
                maritalStatus: "Single",
                otherName: "Reo",
                perCity: "Abeokuta",
                perHouseNumber: "36b",
                perStreetName: "Gbonogu",
                phoneNumber: "09055220828",
                resCity: "Abeokuta",
                resHouseNumber: "36b",
                resStreetName: "Gbonogu",
                residenceLga: "Kajola",
                stateOfOrigin: "Oyo",
                stateOfResidence: "ondo",
                title: "MRS.",
            },
            status: "Finished"
        },
        {
            id: 3,
            biodata: {
                dob: "2023-02-09",
                emailAddress: "mazeedahhamzat@gmail.com",
                firstName: "Bisi",
                gender: "male",
                lastName: "Sholape",
                lga: "Kajola",
                maritalStatus: "Single",
                otherName: "Reo",
                perCity: "Abeokuta",
                perHouseNumber: "36b",
                perStreetName: "Gbonogu",
                phoneNumber: "09055220828",
                resCity: "Abeokuta",
                resHouseNumber: "36b",
                resStreetName: "Gbonogu",
                residenceLga: "Kajola",
                stateOfOrigin: "Oyo",
                stateOfResidence: "ondo",
                title: "DOCTOR.",
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
            const employee = {
                id: state.employees.length+1,
                biodata: action.payload.data,
                status: "Progress"
            }
            state.employees.push(employee);
            return { ...state };
        case (userActions.ADD_EMPLOYEE_NEXTOFKIN):
            const employee2 = state.employees.find(e => e.id == action.payload.employeeId);
            employee2.nextOfKin =  action.payload.data;
            return { ...state };
        case (userActions.ADD_EMPLOYEE_SERVICE_RECORD):
            const employee3 = state.employees.find(e => e.id == action.payload.employeeId);
            employee3.serviceRecord = action.payload.data;
            return { ...state };
        case (userActions.ADD_EMPLOYEE_FINANCIAL_RECORD):
            const employee4 = state.employees.find(e => e.id == action.payload.employeeId);
            employee4.financialRecord = action.payload.data ;
            return { ...state };
        default:
            return state;
    }
}

