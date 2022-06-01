export interface Shows {
  page: number;
  results?: Show[] | null;
  total_pages: number;
  total_results: number;
}
export interface Show {
  backdrop_path?: string | null;
  first_air_date: string;
  genre_ids?: number[] | null;
  id: number;
  name: string;
  origin_country?: string[] | null;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
