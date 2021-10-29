import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Review from './Review';

const Artists = () => {
    const [data, setData] = useState([])

    const get = async () => {
		try {
			const res = await axios.get(`http://localhost:8000/artists/`);
			setData(res.data);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		get();
	}, []);

    return (
        <div>
            {data.map(item => {
                return (
                    <div key={item.name} className='artist'>
                        <img src={item.image} alt={item.name} className='artistImg'/>
                        <h2>{item.name}</h2>
                        <h3>Years Active:</h3> {item.years_active}
                        <h3>About:</h3> {item.bio}
                        <Review />
                    </div>
                )
            })}
        </div>
    );
};

export default Artists;