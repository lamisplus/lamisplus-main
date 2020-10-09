import * as ACTION_TYPES from '../actions/types'

const initialState = {
  list: [],

}

const organizationalUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_ORGANIZATIONAL_UNIT_MODULE:
      return { ...state, list: [...action.payload] }
    
      case ACTION_TYPES.FETCH_ALL_PARENT_ORGANIZATIONAL_UNIT:
        return { ...state, list: [...action.payload] }
    default:
      return state
  }
}

export default organizationalUnitReducer

