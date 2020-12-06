import * as api from '../../api';
import { 
    GET_POSTS
} from '../types';


export const getPosts = (homePosts,page,order,limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(homePosts,page,order,limit)
})
