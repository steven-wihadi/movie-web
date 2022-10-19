import './App.scss';
import Header from './components/header/Header';
import { useState } from 'react';
import MovieCard from './components/movie-card/MovieCard';
import AppImplementator from './App.impl';
import { DEFAULT_MOVIE_KEYWORD, SEARCH_MOVIE_TAB } from './components/header/constant';
import MovieDetailModal from './components/movie-detail-modal/MovieDetailModal';

function App() {
  const usecase = new AppImplementator();
  const [movieList, setMovieList] = useState([]);
  const [bodyMassage, setBodyMessage] = useState('');
  const [movieId, setMovieId] = useState('');
  const [isModalShow, setIsModalShow] = useState(false);

  const fetchList = (keyword = DEFAULT_MOVIE_KEYWORD) => {
    const params = {
      keyword,
      page: 1,
    }

    setBodyMessage('Loading...');
    setTimeout(() => {
      usecase.getMovieList(params).then(res => {
        setMovieList([...res]);
        setBodyMessage(res.length === 0 ? 'Ooops Data is empty...' : '');
      }).catch(err => {
        setBodyMessage('Ooops Data is empty...');
      });
    }, 1000);
  }

  const onChangeTab = (tabName: string) => {
    console.log('===tabName: ', tabName);
    switch(tabName) {
      case SEARCH_MOVIE_TAB:
        fetchList(DEFAULT_MOVIE_KEYWORD);
        break;
    }
  }

  const onSearch = (keyword: string) => {
    fetchList(keyword);
  }

  return (
    <div className={"App" + (isModalShow ? ' freeze-scroll' : '')}>
      <Header onChangeTab={onChangeTab} onSearch={onSearch} />
      
      <div className='body-container'>
        { !bodyMassage &&
          movieList.map(movie =>
            <MovieCard
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              onClickTitle={() => {
                setMovieId(movie.imdbID);
                setIsModalShow(true);
              }}
              isFavorite={false}
            />
          )
        }

        {
          bodyMassage &&
          <h4 className='data-message'>
            {bodyMassage}
          </h4>
        }
      </div>

      <MovieDetailModal
        isShow={isModalShow}
        movieId={movieId}
        onClose={() => setIsModalShow(false)}
      />
    </div>
  );
}

export default App;
