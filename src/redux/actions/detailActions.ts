import { DetailFetchAction, DetailFetchActionSuccess } from './../../types/Actions.types';
import { Movie } from '../../types/Movies.types';
import { Show } from '../../types/Shows.types';
import { Person } from '../../types/People.types';

export const GET_DETAIL_FETCH = "GET_DETAIL_FETCH";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";

export const detailFetchAction = (
    id: string,
    path: string
): DetailFetchAction => {
    return {
        type: GET_DETAIL_FETCH,
        payload: {
            id,
            path
        }
    }
}

export const detailSuccessAction = (
    param: Movie | Show | Person
): DetailFetchActionSuccess => {
    return {
        type: GET_DETAIL_SUCCESS,
        payload: {
            detail: param
        }
    }
}