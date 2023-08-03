export const INITIAL_STATE = {
  teams: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEAMS':
      return {
        ...state,
        teams: action.payload,
      }
    default:
      return new Error()
  }
}
