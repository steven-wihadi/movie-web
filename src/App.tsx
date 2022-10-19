import './App.scss';
import Header from './components/header/Header';
import { useState } from 'react';
import MovieCard from './components/movie-card/MovieCard';
import AppImplementator from './App.impl';
import { SEARCH_MOVIE_TAB } from './components/header/constant';

function App() {
  const usecase = new AppImplementator();
  const [movieList, setMovieList] = useState([]);
  const [bodyMassage, setBodyMessage] = useState('');

  const fetchList = (keyword = 'army') => {
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
        fetchList('army');
        break;
    }
  }

  const onSearch = (keyword: string) => {
    fetchList(keyword);
  }

  return (
    <div className="App">
      <Header onChangeTab={onChangeTab} onSearch={onSearch} />
      
      <div className='body-container'>
        { !bodyMassage &&
          movieList.map(movie =>
            <MovieCard
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
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
    </div>
  );
}

export default App;
