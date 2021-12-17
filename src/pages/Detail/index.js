import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const getDetail = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div classname="h-screen p-10">
      <Link className="text-center" to="/">
        Back
      </Link>

      {detail.map((item) => (
        <div className="m-20">
          <p className="font-bold uppercase">{item.name}</p>
          <p className="text-xs">{item.email}</p>
          <p className="italic text-xs">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Detail;
