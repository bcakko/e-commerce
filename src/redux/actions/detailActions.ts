import { DetailFetchAction, DetailFetchActionSuccess } from './../../types/Actions.types';
import { Movie } from '../../types/Movies.types';
import { Show } from '../../types/Shows.types';
import { Person } from '../../types/People.types';
import { FilterParamType } from './filterCollectionActions';

export const GET_DETAIL_FETCH = "GET_DETAIL_FETCH";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";

export const detailFetchAction = (
    id: string
): DetailFetchAction => {
    return {
        type: GET_DETAIL_FETCH,
        payload: {
            id
        }
    }
}

export const detailSuccessAction = (
    param: FilterParamType
): DetailFetchActionSuccess => {
    return {
        type: GET_DETAIL_SUCCESS,
        payload: {
            detail: param
        }
    }
}