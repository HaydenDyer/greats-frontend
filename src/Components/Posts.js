import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './Post';

const Posts = () => {
    const [data, setData] = useState([])

    const get = async () => {
		try {
			const res = await axios.get(`http://localhost:8000/posts/`);
			setData(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		get();
	}, []);

    return (
        <div>

            <h1>
                soundspreader.
            </h1>

            <p>
                this is a website where you can share your favorite music, and discover new music too!
            </p>

            <Post />

            {data.map(item => {
                return (
                    <div
                        key={item.id}
                        className='post'
                    >
                        <h3>Posted by {item.author} on {item.created_on}</h3>
                        <h2>{item.subject}</h2>
                        <p>{item.body}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;