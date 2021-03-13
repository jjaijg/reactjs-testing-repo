export const initialState = {
  stateProp1: false,
};

export const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        stateProp1: true,
      };

    case 'FAILURE':
      return {
        ...state,
        stateProp1: false,
      };
    default:
      return state;
  }
};
