export interface Shows {
  page: number;
  results: Show[];
  total_pages: number;
  total_results: number;
}
export interface Show {
  backdrop_path: string;
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
  genres: {
    id: number;
    name: string;
  }[];

  title?: string | null;
  original_title?: string | null;
  known_for_department?: string | null;
  release_date?: string | null;
  profile_path?: string | null;
}
