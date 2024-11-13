import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Playlist {
  id: string;
  name: string;
  images: { url: string }[];
}

const Playlists: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/playlists');
        setPlaylists(response.data.items);
      } catch (error) {
        console.error("Error fetching playlists", error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h2>Playlists</h2>
      <div>
        {playlists.map((playlist) => (
          <div key={playlist.id}>
            <img src={playlist.images[0].url} alt={playlist.name} />
            <h3>{playlist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
