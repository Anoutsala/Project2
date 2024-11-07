import React from 'react';
import './Home.css';

const Home = () => {
    const clientId = 'SPOTIFY_CLIENT_ID';
    const redirectUri = 'REDIRECT_URI';

    const handleLogin = () => {
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=user-read-private`;
        window.location.href = authUrl;
    };

    return (
        <div className="home-container">
            <h1>Spotify Moodify</h1>
            <button className="login-button" onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
};

export default Home;
