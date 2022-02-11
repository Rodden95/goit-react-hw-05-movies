
import style from '../../Pages/pages.module.css';
import questionMark from "../../Pages/img/question_mark_PNG56.png"
export default function FilmCardComponent({data:{backdrop_path, title, vote_average, overview,genres}}) {

  return <div className={style.cardContainer}>
          <img src={backdrop_path
            ?
            `https://image.tmdb.org/t/p/w300${backdrop_path}`
            : 
            questionMark}
            className={style.img}
            alt="title"
          />
          <div>
            <h2 className="title">{title}</h2>
            <span className="vote">{vote_average}</span>
            <h3>Overview:</h3>
            <span>{overview}</span>
            Genres:
            {genres.map(({ name }) => <span key={name}>{name}</span>)}
          </div>
        </div>
}