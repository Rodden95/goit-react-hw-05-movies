import { useEffect, useState, lazy, Suspense } from "react";
import { useParams, Link, NavLink, Outlet,Routes,Route } from "react-router-dom"
import { fetchId } from '../services';

import style from '../Pages/pages.module.css';

const FilmCardComponent = lazy(() => import('../Components/FilmCardComponent/FilmCardComponent.jsx'))
const Cast = lazy(() => import('../Components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../Components/Reviews/Reviews.jsx'));

export default function FilmCard() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);


  
  useEffect(() => {
   
    fetchId(id)
      .then(({ title, original_title, backdrop_path, vote_average, genres, overview }) =>
        setMovieData({ title: title ?? original_title, vote_average, overview, genres, backdrop_path })
    )
   
  }, [id])

  const back = () => {
    window.history.go(-1);
  }
  return (

    <div >
      <div className={style.btn}>
        {/* <Link
          to="/"
          className={style.goBackBtn}>
          back
        </Link> */}
        <button className={style.backBtn} onClick={back}>back</button>
      </div>
      {movieData &&
        <Suspense fallback={<div>Загружаем...</div>}><FilmCardComponent data={movieData} /></Suspense>
      }
      <h3>Additionals information</h3>
      <ul>
        <li key="Cast"><NavLink to="cast">Cast</NavLink></li>
        <li key="Reviews"><NavLink to="reviews">Reviews</NavLink></li>
      </ul>
      <Suspense fallback={<div>Загружаем...</div>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
      <Outlet />
    </div>
  )
}