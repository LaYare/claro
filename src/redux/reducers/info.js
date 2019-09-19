const initialState = {
  info: [],
  loading: false,
  error: ''
};

export default function infoMovie(state = initialState, action) {
  switch (action.type) {
    case 'GET_INFO_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'GET_INFO_REJECTED':
      return {
        ...state,
        loading: false,
        error: 'Hubo un error'
      };
    case 'GET_INFO_FULFILLED':
      return {
        ...state,
        info: action.payload.data.response,
        loading: false
      };
    default:
      return state;
  }
}
