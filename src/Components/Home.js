import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreatePost from './CreatePost';

const Home = () => {
    const [data, setData] = useState([])

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

    const deletePost = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/posts/`)
        } catch(err) {
            console.error(err)
        }
    }

    const editPost = async () => {
        try {
            const res = await axios.put(`http://localhost:8000/posts/`)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <div>

            <h1>
                soundspreader.
            </h1>

            <p>
                this is a website where you can share your favorite music, and discover new music too!
            </p>

            <CreatePost />

            <div className='posts'>
				{data.map((item) => (
                    <div className='post'>
                        <h3>Posted by {item.author} on {item.created_on}</h3>
                        <h2>{item.subject}</h2>
                        <p>{item.body}</p>
                        <button onClick={deletePost}>delete</button>
                        <button onClick={editPost}>edit</button>
                    </div>
				))}
			</div>
        </div>
    );
};

export default Home;