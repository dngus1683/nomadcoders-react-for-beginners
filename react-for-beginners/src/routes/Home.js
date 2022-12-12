import {useState, useEffect} from 'react';
import Movie from '../components/Movie.js'

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    // fetch에 then을 붙이는 형식을 대신해서 요즘 많이 사용되는 방법으로 async-await가 있다.
    // async는 함수 앞에 쓰이며, async가 붙은 함수는 항상 promise를 반환한다.
    // promise가 아닌 값을 반환하더라도 이행 상태의 promise로 값을 감싸 이행된 promise가 반환되도록 한다.
    // await는 async내에서만 사용이 가능한데, 이는 promise가 처리될 때까지 기다리는 역할을 한다.

    // fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    // .then((response) => response.json())
    // .then((json) => {
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // });
  }
  useEffect(()=>{
   getMovies();
  },[]) 

  return (
    <div className="App">

      {
        loading ? <h1>Loading...</h1> : <div>
        {movies.map(movie => (
          <Movie 
            key={movie.id} 
            id={movie.id} 
            coverImage={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}/>
        ))}
      </div>
      }
    </div>
  );
}

export default Home;
