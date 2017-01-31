export default function reducer(state={
    welcomeText: "",
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_WELCOME_TEXT": {
        return {...state, fetching: true}
      }
      case "FETCH_WELCOME_TEXT_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_WELCOME_TEXT_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          welcomeText: action.payload,
        }
      }
      case "SET_WELCOME_TEXT": {
        return {
          ...state,
          welcomeText: {...state.welcomeText, welcomeText: action.payload},
        }
      }
    }

    return state
}