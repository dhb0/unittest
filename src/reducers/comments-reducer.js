
import {SAVE_COMMENT, FETCH_COMMENTS} from "../actions/types";
const INITIAL_STATE = ["I am a comment", "I am another comment", "I am too"];

const commentsReducer = (state=INITIAL_STATE, {type, payload}) => {
    switch(type){
        case SAVE_COMMENT: return [...state, payload];
        case FETCH_COMMENTS: 
        const comments = payload.data.map((i, index)=>i.name);
        return [...state, ...comments]
        default: return state
    }
}

export default commentsReducer;