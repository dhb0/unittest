import {saveComment} from "../index";
import {SAVE_COMMENT} from "../types";

describe("saveComment",()=>{
    it("has the correct type", ()=>{
        const action = saveComment();
        console.log(action.type);
        expect(action.type).toEqual(SAVE_COMMENT);
    })

    it("has the correct payload", ()=>{
        const action = saveComment("New one");
        console.log(action.payload);
        expect(action.payload).toEqual("New one")
    })
})