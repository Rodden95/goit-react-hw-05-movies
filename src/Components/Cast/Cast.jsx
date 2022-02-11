import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchCredits } from '../../services';
export default function Cast() {
  const { id } = useParams();
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchCredits(id)
      .then(({ cast }) =>
        setData(cast.slice(0, 5)))
  }, [id]);

  return (
    <div>
      {data && data.map(({ name, character, id, profile_path }) =>
        <div key={id} >
          <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="profile_photo" />
          <div>{name}</div>
          <div>{character}</div>
        </div>
      )}
    </div>
  )
}