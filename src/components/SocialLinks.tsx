import { useState } from 'react';

const SocialLinks = () => {
  const [links, setLinks] = useState({
    twitter: '',
    instagram: '',
    twitch: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinks({ ...links, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4">
      <input
        name="twitter"
        placeholder="Twitter"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={links.twitter}
      />
      <input
        name="instagram"
        placeholder="Instagram"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={links.instagram}
      />
      <input
        name="twitch"
        placeholder="Twitch"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={links.twitch}
      />
    </form>
  );
};

export default SocialLinks;
