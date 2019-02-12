export interface Iimage {
  id: string;
  categories: [];
  urls: {
    full: string;
    raw: string;
  };
}
export interface Istateimage {
  readonly images: Iimage[];
}

export enum ImageDraggerTypes {
  FETCH_REQUEST = "@@imagedragger/FETCH_REQUEST",
  FETCH_SUCCESS = "@@imagedragger/FETCH_SUCCESS",
  FETCH_ERROR = "@@imagedragger/FETCH_ERROR"
}
