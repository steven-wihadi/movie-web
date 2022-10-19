import Fetcher from "../../services/rest.service";
import { RestApiResponse } from "../entity/rest-api.entity";

export interface GetMovieDetailDTO {
  movieId: string;
}

export const getMovieDetailInteractor = ({ movieId }: GetMovieDetailDTO): Promise<RestApiResponse> => {
  const url = `/?i=${movieId}`;
  return Fetcher.get(url);
}
