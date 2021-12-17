import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [post, setPost] = useState([]);

  const getDataPost = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataPost();
  }, []);

  return (
    <div className="min-h-screen flex flex-wrap gap-6 bg-slate-200 py-10 px-20 md:px-4">
      {post.map((item) => (
        <div key={item.id} className="card w-56 p-4 rounded-xl bg-white">
          <h1 className="text-2xl text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h1>
          <p className="text-gray-400">{item.body}</p>
          <Link to={item.id}>Detail</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
