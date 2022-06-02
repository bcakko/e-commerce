export interface People {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}
export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for?: KnownForEntity[] | null;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}
export interface KnownForEntity {
  adult?: boolean | null;
  backdrop_path?: string | null;
  genre_ids?: number[] | null;
  id: number;
  media_type: string;
  original_language: string;
  original_title?: string | null;
  overview: string;
  poster_path: string;
  release_date?: string | null;
  title?: string | null;
  video?: boolean | null;
  vote_average: number;
  vote_count: number;
  first_air_date?: string | null;
  name?: string | null;
  origin_country?: string[] | null;
  original_name?: string | null;
}
