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
  readonly pagenumber?: number;
}

export enum ImageDraggerTypes {
  FETCH_REQUEST = "@@imagedragger/FETCH_REQUEST",
  FETCH_SUCCESS = "@@imagedragger/FETCH_SUCCESS",
  FETCH_ERROR = "@@imagedragger/FETCH_ERROR",
  INCREASE_PAGENUMBER = "@@imagedragger/INCREASE_PAGENUMBER",
  PAGENUMBER_INCREASED = "@@imagedragger/PAGENUMBER_INCREASED"
}
