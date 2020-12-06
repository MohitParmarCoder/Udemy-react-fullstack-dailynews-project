import axios from 'axios';
const URL_SERV = "http://localhost:3004";

export const getPosts = async(prevState,page=1,order="asc",limit="10") => {
    try {
        // http://localhost:3004/posts?_page=1&_limit=6&_order=desc&_sort=id
        const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

        return {
            posts: prevState.posts ? [...prevState.posts,...response.data] : response.data,
            page: page,
            end: response.data.length === 0 ? true : false
        }
    } catch(error){
        throw error;
    }
}