import { MovieList } from "../entity/movie.entity";
import { GetMovieListDTO } from "../interactor/get-movie-list.interactor";

export default abstract class LandingUsecase {
  abstract getMovieList(params: GetMovieListDTO): Promise<MovieList>;
}