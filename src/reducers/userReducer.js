import {LOG_USER} from '../constants/';



const InitialState = {
    userLogged : true,
    token : "sometokefrombackend"
}

export default function ( state=InitialState , action={}){
    switch(action.type) {
        case LOG_USER: {
            return {...state , userLogged : action.payload}
        }
        default : return state
    }
}