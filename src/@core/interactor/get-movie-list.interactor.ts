import Fetcher from "../../services/rest.service";
import { RestApiResponse } from "../entity/rest-api.entity";

interface DTO {
  keyword: string;
  page: number
}

const getMovieList = ({ keyword, page }: DTO): Promise<RestApiResponse>  => {
  const url = `/?s=${keyword}&page=${page}`;
  return Fetcher.get(url);
}

export default getMovieList;
