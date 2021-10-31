import React, {useState} from 'react';
import axios from 'axios';
// import {useHistory} from 'react-router-dom';

const CreatePost = () => {

    const [author, setAuthor] = useState()
    const [subject, setSubject] = useState()
    const [body, setBody] = useState()

    const createPost = async (event, next) => {
        try {
            const res = await axios.post(`http://localhost:8000/posts/`, {
                author: author,
                subject: subject,
                body: body
            })
            res.status(201)
        } catch(err) {
            console.error(err)
        }
    }

    return (
		<div>
			<h2>make a post!</h2>
			<form onSubmit={createPost}>
				<label>author:</label>
				<input
					type='text'
					required
					value={author}
					onChange={(event) => setAuthor(event.target.value)}
				/>
				<label>subject:</label>
				<input
					type='text'
					required
					value={subject}
					onChange={(event) => setSubject(event.target.value)}
				/>
				<label>body:</label>
				<input
					type='textarea'
					required
					value={body}
					onChange={(event) => setBody(event.target.value)}
				/>
				<button type='submit'>submit!</button>
			</form>
		</div>
    );
};

export default CreatePost;