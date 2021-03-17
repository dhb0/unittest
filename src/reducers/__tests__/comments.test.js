import commentsReducer from "../comments-reducer";
import {SAVE_COMMENT} from "../../actions/types";

it("handles action of SAVE_COMMENT", ()=>{
    const action = {
        type: SAVE_COMMENT,
        payload: "new comment"
    }

    const newState = commentsReducer([],action)

    expect(newState).toEqual(["new comment"])
})

it("handles action with unknown type", ()=>{
    const newState = commentsReducer([],{type: 'ASD'})

    expect(newState).toEqual([])
})