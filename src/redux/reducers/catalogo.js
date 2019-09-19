const initialState = {
  movies: [],
  loading: false,
  error: ''
};

export default function bookMovies(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'GET_MOVIES_REJECTED':
      return {
        ...state,
        loading: false,
        error: 'Hubo un error'
      };
    case 'GET_MOVIES_FULFILLED':
      return {
        ...state,
        movies: action.payload.data.response,
        loading: false
      };
    default:
      return state;
  }
}
