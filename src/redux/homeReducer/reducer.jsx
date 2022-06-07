const initHome = {
  list: ["相瑶", "番茄", "瑶妹", "康康"],
};
export const SEARCH_DATA = "SEARCH_DATA";

export const homeReducer = (state = initHome, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        list: [...state.list, action.list],
      };
    default:
      return state;
  }
};
