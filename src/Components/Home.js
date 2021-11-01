import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './Post';

const Home = () => {
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
        <div className='home'>
            <h1>
                soundspreader
            </h1>
            <p>
                this is a website where you can share your favorite music.
            </p>

            <Post editObject={editObject}/>

            <div className='posts'>
				{data.map((item) => (
                    <div className='post'>
                        <h3>posted by {item.author} on {item.created_on}</h3>
                        <h2>{item.subject}</h2>
                        <p>{item.body}</p>
                        <button onClick={() => deletePost(item.id)}>delete</button>
                        <button onClick={() => editPost(item.id)}>edit</button>
                    </div>
				))}
			</div>
        </div>
    );
};

export default Home;