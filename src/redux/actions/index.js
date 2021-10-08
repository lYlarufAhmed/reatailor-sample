import {SET_SELECTED_PROPERTY} from "./types";


export function setPropertyObj(propertyObj) {
    return {
        type: SET_SELECTED_PROPERTY,
        payload: {data: propertyObj}
    }
}