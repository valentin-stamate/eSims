import {GET_USER_BASIC_DATA, GET_USER_DATA} from './actions'
import  GetUserBasicData  from './../Globals/UserStatus'

const initialState = {
    userBasicData: {
        username: "Ha, you tried to hack me",
        email: "youhavenoreasonto@hack.me"
    },
    userData: {
        registration: "756346753534543",
        full_name: "",
        phone: "",
        email: "stamatevalenti125@gmaul.com",
        birth: null,
        mother_firstname: "",
        father_firstname: "",
        nationality: "",
        citizenship: ""
    }
};

function reducers(state = initialState, action) {
    switch (action.type) {
        case GET_USER_BASIC_DATA:
            return {
                ...state,
                userBasicData: {
                    username: action.username,
                    email: action.email,
                },
            };
        case GET_USER_DATA:
            return {
                ...state,
                userData: {
                    registration: action.registration,
                    full_name: action.full_name,
                    phone: action.phone,
                    email: action.email,
                    birth: action.birth,
                    mother_firstname: action.mother_firstname,
                    father_firstname: action.father_firstname,
                    nationality: action.nationality,
                    citizenship: action.citizenship,
                }
            }
        default:
            return state
    }
}

export default reducers
