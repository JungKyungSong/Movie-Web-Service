import { checkPropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "../components/Movie.css";
import styles from "../components/Movie.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.checkPropTypes = {
  id: checkPropTypes.number,
  coverImg: checkPropTypes.toString.isRequired,
  title: checkPropTypes.toString.isRequired,
  summary: checkPropTypes.toString.isRequired,
  genres: checkPropTypes.array,
};

export default Movie;
