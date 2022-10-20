import { MovieItem } from "../@core/entity/movie.entity";

const STORAGE_NAME = 'MY_FAVORITE_MOVIES';
const localData = localStorage.getItem(STORAGE_NAME);
export const myFavoriteMovies = { myFavMovies: localData ? JSON.parse(localData) : {} };

interface Action {
  type: string;
  movieItem: MovieItem;
}

const updateToLocalData = (myFavMovies) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(myFavMovies));
}

export const myFavoriteMovieReducer = (state, action: Action) => {
  const myFavMovies = state.myFavMovies;
  const movieItem = action.movieItem;
  const imdbID = movieItem.imdbID;

  switch(action.type) {
    case 'ADD_TO_MY_FAVORITE':
      myFavMovies[imdbID] = movieItem;
      updateToLocalData(myFavMovies);
      return { myFavMovies };
    case 'DELETE_FROM_MY_FAVORITE':
      delete myFavMovies[imdbID];
      updateToLocalData(myFavMovies);
      return { myFavMovies };
    default:
      return { myFavMovies };
  }
}
