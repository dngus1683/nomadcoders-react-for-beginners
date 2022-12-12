import {Link} from 'react-router-dom';

function Movie({id, coverImage, title, summary, genres}){
    return (
      <div>
        <Link to={`/movie/${id}`}>
          <img src={coverImage} alt={title}/>
          <h2>{title}</h2>
        </Link>
        <p>{summary.length > 235 ? `${summary.slice(0,235)}...`: summary}</p>
        <ul>
          {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
      </div>
    );
}

export default Movie;