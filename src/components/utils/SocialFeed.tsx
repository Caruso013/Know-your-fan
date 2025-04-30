import { useState, useEffect } from 'react';

interface Post {
  id: number;
  user: string;
  content: string;
  likes: number;
}

export const SocialFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts([
      { id: 1, user: 'FURIA', content: 'FURIA acaba de ganhar uma rodada incrível!', likes: 120 },
      { id: 2, user: 'Lucas', content: 'Feliz por ver a FURIA jogar ao vivo!', likes: 45 },
    ]);
  }, []);

  const handleLike = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="p-4 bg-gray-800 text-white mt-16">
      <h2 className="text-3xl font-semibold mb-4">Feed de Interações</h2>
      {posts.map(post => (
        <div key={post.id} className="bg-gray-700 p-4 mb-4 rounded-lg">
          <p className="font-bold">{post.user}</p>
          <p>{post.content}</p>
          <button onClick={() => handleLike(post.id)} className="bg-blue-500 text-white p-2 rounded-lg mr-4">
            Curtir ({post.likes})
          </button>
        </div>
      ))}
    </div>
  );
};
