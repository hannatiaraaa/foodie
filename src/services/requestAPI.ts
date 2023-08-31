import Config from 'react-native-config';
import {applyQueryString} from 'hooks/useQueryString';
import type {TApiResponse} from 'types/services';

const BASE_URL = 'https://api.spoonacular.com';
const {API_KEY} = Config;

type Props = {
  method: string;
  endpoint: string;
  params?: Record<string, any>;
  body?: BodyInit_;
  headers?: HeadersInit_;
};

export function* requestAPI<ResponseType>({
  method,
  endpoint,
  params,
  body,
  headers,
}: Props) {
  const raw = JSON.stringify(body);
  const queryParams = params ? `&${applyQueryString(params)}` : '';
  const url = `${BASE_URL}${endpoint}?apiKey=${API_KEY}${queryParams}`;

  let res: TApiResponse<ResponseType> | undefined;

  const setBody = (): RequestInit => {
    if (body) {
      return {
        method,
        body: raw,
        headers,
      };
    } else {
      return {method, headers};
    }
  };

  try {
    console.log('Try Fetching API');

    const response: Response = yield fetch(url, setBody());
    const {status} = response;

    console.log(response);
    const data: ResponseType = yield response.json();
    res = {data, status};
  } catch (error) {
    console.log('Catch Error in Fetching API', error);
  }

  console.log(url, 'URL');
  console.log(body, headers, 'config');

  console.log('Final Result: ', res);

  return res;
}

export default requestAPI;
