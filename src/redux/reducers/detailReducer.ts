import { GET_DETAIL_FETCH, GET_DETAIL_SUCCESS } from "../actions/detailActions";
import { AnyAction } from "redux";
import { DetailState } from "../../types/States.types";

const initialState: DetailState = {
    detail: {
        adult: false,
        backdrop_path: "",
        profile_path: "",
        first_air_date: "",
        gender: 0,
        known_for:[],
        known_for_department: "",
        genre_ids: [],
        id: 0,
        name: "",
        origin_country: [],
        original_language: "",
        original_title: "",
        original_name: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
        genres: [],
    },
    isLoading: false
}

const detailReducer = (
    state = initialState,
    action: AnyAction
): DetailState => {
    switch (action.type) {
        case GET_DETAIL_FETCH:
            return {
                ...state,
                isLoading: true
            };
        case GET_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                detail: action.payload.detail
            }
        default:
            return state;
    }
}

export default detailReducer;