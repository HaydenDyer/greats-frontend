import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './Post';

const Posts = () => {
    const [data, setData] = useState([])
    const [editObject, setEditObject] = useState(null)

    const getPosts = async () => {
		try {
			const res = await axios.get(`http://localhost:8000/posts/`);
			setData(res.data);
		} catch(err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getPosts();
	}, []);

    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/posts/${id}`)
            getPosts()
        } catch(err) {
            console.error(err)
        }
    }

    const editPost = async (id) => {
        try {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    setEditObject(data[i])
                }
            }
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <div className='postsPage'>

            <Post editObject={editObject}/>

            <div className='posts'>
				{data.map((item) => (
                    <div className='post'>
                        <h4>Posted on {item.created_on}</h4>
                        <h2>{item.songTitle} by {item.artist}</h2>
                        <p>{item.body}</p>
                        <button onClick={() => deletePost(item.id)}>delete</button>
                        <button onClick={() => editPost(item.id)}>edit</button>
                    </div>
				))}
			</div>
        </div>
    );
};

export default Posts;