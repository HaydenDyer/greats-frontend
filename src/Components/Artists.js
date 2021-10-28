import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        <section>
        {data.map(item => {
            return (
                <div key={item.name}>
                    <h2>{item.name}</h2>
                    <h3>Years Active:</h3> {item.years_active}
                    <h3>From:</h3> {item.nationality}
                    <h3>About:</h3> {item.bio}
                </div>
            )
        })}
    </section>
    );
};

export default Artists;