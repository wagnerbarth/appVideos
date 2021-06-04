/* eslint-disable @typescript-eslint/naming-convention */
export interface ISerieApi {
    poster_path?: string;
    overview?: string;
    first_air_date?: string;
    genre_ids?: number[];
    id?: number;
    original_name?: string;
    origin_country?: string;
    original_language?: string;
    name?: string;
    backdrop_path?: string;
    popularity?: number;
    vote_count?: number;
    vote_average?: number;
}

export interface IListaSeries {
    page: number;
    results: ISerieApi[];
    total_results: number;
    total_pages: number;
}
