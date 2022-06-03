import { GET_DETAIL_FETCH, GET_DETAIL_SUCCESS } from "../actions/detailActions";
import { AnyAction } from "redux";
import { DetailState } from "../../types/States.types";

const initialState: DetailState = {
    detail: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
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