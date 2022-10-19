import { useEffect, useState } from "react";
import { noop } from "../../helper";
import MovieDetailModalImplementator from "./MovieDetailModal.impl";
import './style.scss';

interface MovieDetailModalProps {
  movieId: string;
  isShow: boolean;
  onClose?: () => void;
}

const MovieDetailModal = ({ movieId, isShow, onClose }: MovieDetailModalProps) => {
  const usecase = new MovieDetailModalImplementator();
  const [movieDetail, setMovieDetail] = useState<any>({});
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    if (isShow) {
      usecase.getMovieDetail({ movieId }).then(res => {
        setMovieDetail(res);
        setIsFetch(true);
      });
    }
  }, [isShow]);

  return (
    <>
      { isShow &&
        <div className="detail-movie-modal">
          <div className="back-cover"></div>

          { isFetch &&
            <div className="content-detail">
              <img src={movieDetail.Poster} />

              <div className="right-side">
                <button onClick={onClose || noop}>CLOSE</button>
                <h4 className="movie-title">{movieDetail.Title}</h4>
                <span><strong>Year:</strong> {movieDetail.Year}</span>
                <span><strong>Released:</strong> {movieDetail.Released}</span>
                <span><strong>Director:</strong> {movieDetail.Director}</span>
                <span><strong>Actors:</strong> {movieDetail.Actors}</span>
                <span><strong>Plot:</strong> {movieDetail.Plot}</span>
                <span><strong>Runtime:</strong> {movieDetail.Runtime}</span>
              </div>
            </div>
          }
        </div>
      }
    </>
  );
}

export default MovieDetailModal;