import { MovieDetail } from "../entity/movie.entity";
import { GetMovieDetailDTO } from "../interactor/get-movie-detail.interactor";

export default abstract class MovieDetailModalUsecase {
  abstract getMovieDetail(params: GetMovieDetailDTO): Promise<MovieDetail>;
}