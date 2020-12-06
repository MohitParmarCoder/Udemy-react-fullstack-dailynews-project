import { 
    ADD_NEWSLETTER,
    CLEAR_NEWSLETTER,
    SEND_MESSAGE
} from '../types';

export default function userReducer(state={},action){
    switch(action.type){
        case ADD_NEWSLETTER:
            return { ...state,...action.payload }
        case CLEAR_NEWSLETTER:
            return { ...state, newsletter: action.payload,email: action.payload}
        case SEND_MESSAGE:
            return { ...state, contact: action.payload }
        default:
            return state
    }
}