import { noop } from '../../helper';
import './style.scss';

interface MovieItem {
  poster: string;
  title: string;
  year: string;
  onClickTitle?: () => void;
}

const MovieCard = ({ poster, title, year, onClickTitle }: MovieItem) => {

  return (
    <div className='movie-card'>
      <img src={poster} alt='movie-poster'/>
      <h4 onClick={onClickTitle || noop}>{title} ({year})</h4>
    </div>
  );
}

export default MovieCard;