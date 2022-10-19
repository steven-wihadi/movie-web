import './style.scss';

interface MovieItem {
  poster: string;
  title: string;
  year: string;
}

const MovieCard = ({ poster, title, year }: MovieItem) => {
  return (
    <div className='movie-card'>
      <img src={poster} alt='movie-poster'/>
      <h4>{title} ({year})</h4>
    </div>
  );
}

export default MovieCard;