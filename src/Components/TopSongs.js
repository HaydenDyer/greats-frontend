import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TopSongs = () => {

    const [songs, setSongs] = useState([])

    const getSongs = async () => {
		try {
			const res = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b7abc3e2db3124fd769e19dbe8cdcb26&format=json`);
			setSongs(res.data.tracks.track);
            console.log(res.data.tracks.track);
            console.log('hi');
		} catch(err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getSongs();
	}, []);

    return (
        <div className='topSongs'>
            <h2>Here are the top songs of this week, based on the Last.fm charts.</h2>
            {songs.map((song) => (
                <div className='song' key={song.name}>
                    <a href={song.url}>
                        <h2 className='songLink'>{song.name}</h2>
                    </a>
                    <h3>by {song.artist.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default TopSongs;