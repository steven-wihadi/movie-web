import { noop } from '../../helper';
import BrightStart from '../../assets/images/bright-star.svg';
import EmptyStart from '../../assets/images/star.svg';
import './style.scss';
import { useState } from 'react';

interface MovieItem {
  poster: string;
  title: string;
  year: string;
  isFavorite: boolean;
  onClickTitle?: () => void;
  onClickFavorite?: (e: boolean) => void;
}

const MovieCard = ({ poster, title, year, onClickTitle, isFavorite, onClickFavorite }: MovieItem) => {
  const [isbright, setIsbright] = useState(isFavorite);

  const onToogleStar = () => {
    if (onClickFavorite) {
      onClickFavorite(!isbright);
    }
    setIsbright(!isbright);
  }

  return (
    <div className='movie-card'>
      <button onClick={onToogleStar}>
        <img src={isbright ? BrightStart : EmptyStart} alt='star-ico'/>
      </button>
      <img className='movie-poster' src={poster} alt='movie-poster'/>
      <h4 onClick={onClickTitle || noop}>{title} ({year})</h4>
    </div>
  );
}

export default MovieCard;