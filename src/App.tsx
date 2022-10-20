import './App.scss';
import Header from './components/header/Header';
import { useReducer, useState } from 'react';
import MovieCard from './components/movie-card/MovieCard';
import AppImplementator from './App.impl';
import { DEFAULT_MOVIE_KEYWORD, SEARCH_MOVIE_TAB, MY_FAVORITE_TAB } from './components/header/constant';
import MovieDetailModal from './components/movie-detail-modal/MovieDetailModal';
import { myFavoriteMovies, myFavoriteMovieReducer } from './services/favorite-movie.service';
import { MovieItem } from './@core/entity/movie.entity';

let activeTab;

function App() {
  const usecase = new AppImplementator();
  const [movieList, setMovieList] = useState([]);
  const [bodyMassage, setBodyMessage] = useState('');
  const [movieId, setMovieId] = useState('');
  const [isModalShow, setIsModalShow] = useState(false);
  const [localFavoriteMovies, dispatch] = useReducer(myFavoriteMovieReducer, myFavoriteMovies);

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

  const mapLocalToMovieListArr = () => {
    const temp = [];
    for(const[key, value] of Object.entries(localFavoriteMovies.myFavMovies)) {
      temp.push(value);
    }
    setMovieList([...temp]);
  }

  const onChangeTab = (tabName: string) => {
    activeTab = tabName;

    switch(tabName) {
      case SEARCH_MOVIE_TAB:
        fetchList(DEFAULT_MOVIE_KEYWORD);
        break;
      case MY_FAVORITE_TAB:
        if (Object.keys(localFavoriteMovies.myFavMovies).length === 0) {
          setBodyMessage('Data is empty...');
        } else {
          mapLocalToMovieListArr();
          setBodyMessage('');
        }
        break;
    }
  }

  const onSearch = (keyword: string) => {
    fetchList(keyword);
  }

  const addToMyFavorite = (isbright, movieItem: MovieItem) => {
    dispatch({
      type: isbright ? 'ADD_TO_MY_FAVORITE' : 'DELETE_FROM_MY_FAVORITE',
      movieItem,
    });

    if (activeTab === MY_FAVORITE_TAB) {
      setTimeout(() => {
        mapLocalToMovieListArr();
      }, 50);
    }
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
              isFavorite={localFavoriteMovies.myFavMovies[movie.imdbID] ? true : false}
              onClickFavorite={(isbright) => addToMyFavorite(isbright, movie)}
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
