import axios from 'axios'
const initDefault = {
    data: [],
    loading: false,
    error: false
};

const FETCH_START_DATA = 'FETCH_START_DATA';
const FETCH_SUCCESS_DATA = 'FETCH_SUCCESS_DATA';
const FETCH_ERROR_DATA = 'FETCH_ERROR_DATA';

export function fetchData() {
    console.log(111)
    return (dispatch) => {
        console.log(222)
        dispatch(fetchStartData())
        axios.post('/api/data').then(res => {
            dispatch(fetchSuccessData(res.data.data))
        }).catch(() => {
            dispatch(fetchErrorData())
        })
    }
}

export function fetchStartData() {
    return {
        type: FETCH_START_DATA
    }
}
export function fetchSuccessData(data) {
    return {
        type: FETCH_SUCCESS_DATA,
        data: data
    }
}
export function fetchErrorData() {
    return {
        type: FETCH_ERROR_DATA
    }
}

export const defaultReducer = (state = initDefault, action) => {
    switch (action.type) {
        case FETCH_START_DATA:
            console.log(action)
            return {
                ...state,
                loading: true,
                error: false
            }
        case FETCH_SUCCESS_DATA:
            console.log(action)
            return {
                ...state,
                data: action.data,
                loading: false,
                error: false,
            }
        case FETCH_ERROR_DATA:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}