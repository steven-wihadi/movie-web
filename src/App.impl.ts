import { MovieList } from "./@core/entity/movie.entity";
import { getMovieListInteractor, GetMovieListDTO } from "./@core/interactor/get-movie-list.interactor";
import LandingUsecase from "./@core/usecase/landing.usecase";

export default class AppImplementator extends LandingUsecase {
  getMovieList(params: GetMovieListDTO): Promise<MovieList> {
    return getMovieListInteractor(params).then(res => {
      if (res.data.Response === 'True') {
        const movieList:MovieList = res.data.Search;
        return movieList;
      } else {
        return [];
      }
    }).catch(err => {
      return err;
    });
  }
}