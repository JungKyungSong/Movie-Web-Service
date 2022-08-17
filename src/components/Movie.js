import { checkPropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "../components/Movie.css";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
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
