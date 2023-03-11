const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: null,
  };
  
  export const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        
      case "loginLoading":
        return {
          ...state,
          isLoading: true,
          isError: false,
          token: null,
          isAuth: false,
        };
      case "loginSuccess":
        return {
          ...state,
          isLoading: false,
          isError: false,
          token: payload,
          isAuth: true,
        };
      case "loginFailure":
        return {
          ...state,
          isLoading: false,
          isError: true,
          token: null,
          isAuth: false,
        };
      default:
        return state;
    }
  };
  