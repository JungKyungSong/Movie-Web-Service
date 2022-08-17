import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//url 정보를 가져옴 (/movie/?)
function Detail() {
  const { id } = useParams(); //useParams는 {id : 1111}을 가져옴 (여기서 id는 내가 설정한 path에서 :id), 이걸 {id}로 받으면 딱 id값인 숫자만 반환
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>{movie.title}</h1>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
//await는 async 함수 내부에 있지 않으면 사용 불가 (getMovie를 async 함수로 만들어줌)
export default Detail;
