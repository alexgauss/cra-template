import { API_BASE_URL } from "../config";

export type QueryString = {[key:string]: string}
export type JSONBody = {[key:string]: string | boolean | number };
export type Headers = {[key:string]: string};

export type APIClientOptions = {
  query?: QueryString;
  body?: {[key:string]: string | boolean | number };
  headers?: Headers
}

export const qs = (query: QueryString) => {
  return Object.keys(query).map(key => `${key}=${query[key]}`).join("&");
};

export function APIClient<T>(path: string, options: APIClientOptions): Promise<T>{
  return fetch(`${API_BASE_URL}${path}${options.query ? qs(options.query) : ""}`, {
    headers: options.headers,
    body: (options.body ? JSON.stringify(options.body) : undefined)
  })
    .then(res => res.json());
}