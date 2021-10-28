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

    const Slideshow = (img1, img2, img3) => {

        let i = 0
        const imgArray = [img1, img2, img3]
        console.log(imgArray);
        const time = 2000
        
        document.artist.src = imgArray[i]
    
        if(i < imgArray.length - 1){
            i++
        } else { 
            i = 0
        }

        setTimeout(Slideshow, time)
    }

    return (
        <div>
            <img src="" alt="Photograph of the artist or band." name="artist"/>
            {data.map(item => {
                return (
                    <div key={item.name}>
                        {/* <img src="" alt="Photograph of the artist or band." name="artist" className='artistImg'/> */}
                        {Slideshow(item.img1url, item.img2url, item.img3url)}
                        <h2>{item.name}</h2>
                        <h3>Years Active:</h3> {item.years_active}
                        <h3>From:</h3> {item.nationality}
                        <h3>About:</h3> {item.bio}
                    </div>
                )
            })}
        </div>
    );
};

export default Artists;