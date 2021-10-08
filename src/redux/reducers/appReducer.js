// TODO: import actions
import {
    SET_SELECTED_PROPERTY
} from "../actions/types";

const initialState = {
    //TODO: your initial states
    loading: null,
    // dynamicStatus: '',
    // showingDashboard: false
    selectedProperty: {}
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_PROPERTY:
            state.selectedProperty = action.payload.data
            break
        default:
            break
        // throw Error('Invalid action'+action.type)
    }
    return JSON.parse(JSON.stringify(state))
}