import Fetcher from "../../services/rest.service";
import { RestApiResponse } from "../entity/rest-api.entity";

export interface GetMovieListDTO {
  keyword: string;
  page: number
}

export const getMovieListInteractor = ({ keyword, page }: GetMovieListDTO): Promise<RestApiResponse>  => {
  const url = `/?s=${keyword}&page=${page}`;
  return Fetcher.get(url);
}
