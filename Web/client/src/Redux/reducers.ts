import {GET_SEMESTER_CLASSES, GET_SEMESTERS, GET_USER_BASIC_DATA, GET_USER_DATA} from './actions'

const initialState = {
    userBasicData: {
        username: "Ha, you tried to hack me",
        email: "youhavenoreasonto@hack.me"
    },
    userData: {
        registration: "",
        full_name: "",
        phone: "",
        email: "",
        birth: null,
        mother_firstname: "",
        father_firstname: "",
        nationality: "",
        citizenship: ""
    },
    userSemesters: [
        {
            id: 0,
            year: 2000,
            year_of_study: 2000,
            semester: 1,
            group: "B4 e cea mai tare",
            domain: "Informatica",
        },
    ],
    semesterClasses: [
        {
            semester_number: "1",
            class_name: "",
            class_grade: "",
            class_credits: 0,
            date: null,
        }
    ],
    yearResult: {
        average_grade: 0,
        points: 0,
        total_credits: 0,
    },
    semestersResult: [
        {
            semester: "0",
            average_grade: "0",
            points: 0,
            credits: 0,
        },
        {
            semester: "0",
            average_grade: "0",
            points: 0,
            credits: 0,
        },
    ]
};

function reducers(state = initialState, action) {
    switch (action.type) {
        case GET_USER_BASIC_DATA:
            return {
                 ...state,
                userBasicData: action.data,
            };
        case GET_USER_DATA:
            return {
                ...state,
                userData: action.data,
            }
        case GET_SEMESTERS:
            return {
                ...state,
                userSemesters: action.data,
            }
        case GET_SEMESTER_CLASSES:
            return {
                ...state,
                semesterClasses: action.semesterClasses,
                semestersResult: action.semestersResult,
                yearResult: action.yearResult,
            }
        default:
            return state
    }
}

export default reducers
