import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='home'>
                <h1>♫soundspreader♫</h1>
                <p className='about'>
                    Welcome to Soundspreader! This is a place where you can come to see what's popular in music right now and also share your favorite songs. If you don't have a preferred music streaming provider, below are a few links to a few of the top streaming services.
                </p>
            </div>
            <div>
                <a href="https://www.spotify.com/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png" alt="Spotify"/>
                </a>
                <a href="https://www.apple.com/apple-music/">
                <img src="https://i.pinimg.com/originals/67/f6/cb/67f6cb14f862297e3c145014cdd6b635.jpg" alt="Apple Music"/>
                </a>
                <a href="https://tidal.com/">
                <img src="https://images.squarespace-cdn.com/content/v1/5214dea7e4b09480ccb6affe/1626190436338-EHMN8ZREO11UUNF8VG9S/Tidal+Thumbnail.png" alt="Tidal"/>
                </a>
            </div>
        </div>
    );
};

export default Home;