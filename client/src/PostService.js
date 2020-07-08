import axios from 'axios';

const _IP = "127.0.0.1";
const _PORT = "5000";
const _PATH = "/api/posts/"

const url = "http://"+ _IP + ":" + _PORT + _PATH

class PostService {
    //-----------------GET-----------------
    static getPosts(){
        return new Promise( async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post
                        //,createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        })
    }

    //-----------------CREATE-----------------
    static insertPost(name){
        return axios.post(url, {
            name
        });
    }

    //-----------------DELETE-----------------
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

}

export default PostService;