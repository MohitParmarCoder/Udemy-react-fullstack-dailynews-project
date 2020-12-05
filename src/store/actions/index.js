import * as api from '../../api';
import { 
    GET_POSTS
} from '../types';


export const getPosts = () => ({
    type: GET_POSTS,
    payload: api.getPosts()
})
