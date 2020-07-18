import {GET_USER_BASIC_DATA, GET_USER_DATA} from './actions'

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
    }
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
        default:
            return state
    }
}

export default reducers
