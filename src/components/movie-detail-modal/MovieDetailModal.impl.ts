import { MovieDetail } from "../../@core/entity/movie.entity";
import { GetMovieDetailDTO, getMovieDetailInteractor } from "../../@core/interactor/get-movie-detail.interactor";
import MovieDetailModalUsecase from "../../@core/usecase/movie-detail-modal.usecase";

export default class MovieDetailModalImplementator extends MovieDetailModalUsecase {
  getMovieDetail(params: GetMovieDetailDTO): Promise<MovieDetail> {
    return getMovieDetailInteractor(params).then(res => {
      if (res.data.Response === 'True') {
        const movieDetail: MovieDetail = res.data;
        return movieDetail;
      } else {
        return res.data;
      }
    }).catch(err => {
      return err;
    });
  }
}