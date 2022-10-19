import UseAxios from "../plugins/axios.plugin";

type URL = string;
interface FetcherMethod {
  get: (url: URL) => any
}

const baseURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const axiosGet = (url: URL) => {
  const andSyntax = url ? '&' : '';

  return UseAxios({
    baseURL,
    responseType: 'json',
    method: 'get',
    url: `${url}${andSyntax}apikey=${apiKey}`,
  });
}

const Fetcher: FetcherMethod = {
  get:  axiosGet
}

export default Fetcher;