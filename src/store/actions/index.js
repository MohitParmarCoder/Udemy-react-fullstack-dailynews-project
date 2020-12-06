import * as api from '../../api';
import { 
    GET_POSTS,
    ADD_NEWSLETTER,
    CLEAR_NEWSLETTER,
    GET_POST_BY_ID
} from '../types';


/*////////////////////////////////////
            POST
/////////////////////////////////////*/

export const getPosts = (homePosts,page,order,limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(homePosts,page,order,limit)
})

export const getPostById = (id) => ({
    type: GET_POST_BY_ID,
    payload:api.getPostById(id)
})

/*////////////////////////////////////
            USER
/////////////////////////////////////*/

export const addNewsletter = (data) => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsletter(data)
}) 

export const clearNewsletter = () => ({
    type: CLEAR_NEWSLETTER,
    payload: {}
})