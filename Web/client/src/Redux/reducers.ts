import {GET_USER_BASIC_DATA} from './actions'
import  GetUserBasicData  from './../Globals/UserStatus'

const initialState = {
    username: "Ha, you tried to hack me",
    email: "youhavenoreasonto@hack.me"
};

function reducers(state = initialState, action) {
    switch (action.type) {
        case GET_USER_BASIC_DATA:
            return {
                username: action.username,
                email: action.email
            }

        default:
            return state

    }
}

export default reducers
