import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ProfileData {
  display_name: string;
  email: string;
  images?: { url: string }[];
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me');
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profile && (
        <>
          <p>Name: {profile.display_name}</p>
          <p>Email: {profile.email}</p>
          <img src={profile.images ? profile.images[0].url : ''} alt="Profile" />
        </>
      )}
    </div>
  );
};

export default Profile;
