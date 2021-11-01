import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Post = (props) => {

	console.log(props.editObject)

    const [author, setAuthor] = useState(props.editObject ? props.editObject.author : '')
    const [subject, setSubject] = useState(props.editObject ? props.editObject.subject : '')
    const [body, setBody] = useState(props.editObject ? props.editObject.body : '')

    useEffect(() => {
		console.log(props.editObject)
		setAuthor(props.editObject ? props.editObject.author : '')
		setSubject(props.editObject ? props.editObject.subject : '')
		setBody(props.editObject ? props.editObject.body : '')
	}, [props])

    const createPost = async () => {
        try {
			if (props.editObject) {
				await axios.put(`http://localhost:8000/posts/${props.editObject.id}`, {
					author: author,
					subject: subject,
					body: body,
					created_on: props.editObject.created_on,
					id: props.editObject.id,
				})
			}
            axios.post(`http://localhost:8000/posts/`, {
                author: author,
                subject: subject,
                body: body
            })
        } catch(err) {
            console.error(err)
        }
    }

    return (
		<div>
			<h3>make a post below!</h3>
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
				<button type='submit'>{props.editObject ? 'update' : 'submit'}</button>
			</form>
		</div>
    );
};

export default Post;