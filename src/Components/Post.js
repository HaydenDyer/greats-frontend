import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Post = (props) => {

	console.log(props.editObject)

    const [artist, setArtist] = useState(props.editObject ? props.editObject.artist : '')
    const [songTitle, setSongTitle] = useState(props.editObject ? props.editObject.songTitle : '')
    const [body, setBody] = useState(props.editObject ? props.editObject.body : '')

    useEffect(() => {
		setArtist(props.editObject ? props.editObject.artist : '')
		setSongTitle(props.editObject ? props.editObject.songTitle : '')
		setBody(props.editObject ? props.editObject.body : '')
	}, [props])

    const createPost = async () => {
        try {
			if (props.editObject) {
				await axios.put(`http://localhost:8000/posts/${props.editObject.id}`, {
					artist: artist,
					songTitle: songTitle,
					body: body,
					created_on: props.editObject.created_on,
					id: props.editObject.id,
				})
			}
            axios.post(`http://localhost:8000/posts/`, {
                artist: artist,
                songTitle: songTitle,
                body: body
            })
        } catch(err) {
            console.error(err)
        }
    }

    return (
		<div>
			<h2>Share some of your favorite songs below!</h2>
			<form onSubmit={createPost}>
				<label>Artist:</label>
				<input
					type='text'
					required
					value={artist}
					onChange={(event) => setArtist(event.target.value)}
				/>
				<label>Song title:</label>
				<input
					type='text'
					required
					value={songTitle}
					onChange={(event) => setSongTitle(event.target.value)}
				/>
				<label>Why you like it:</label>
				<textarea
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