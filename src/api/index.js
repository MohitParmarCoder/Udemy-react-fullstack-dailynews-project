import axios from 'axios';
const URL_SERV = "http://localhost:3004";

export const getPosts = async() => {
    try {
        // http://localhost:3004/posts?_page=1&_limit=6&_order=desc&_sort=id
        const response = await axios.get(`${URL_SERV}/posts`);

        return {
            posts: response.data
        }
    } catch(error){
        throw error;
    }
}