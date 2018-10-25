import addSubtractReducer from "./addSubtractReducer";

describe("Test Reducer", () => {
    it("Should test Default State with AddSubtractReducer", () => {
        expect(addSubtractReducer(undefined, {})).toEqual({ result: 0 });
    })

    it("Should handle ADD Action", () => {
        const state = { result: 0 };
        const action = { type: "ADD", payload: 1 }

        expect(addSubtractReducer(state, action)).toEqual({ result: 1 });
    })

    it("Should handle SUBTRACT Action", () => {
        const state = { result: 0 };
        const action = { type: "SUBTRACT", payload: 1 }

        expect(addSubtractReducer(state, action)).toEqual({ result: 1 });
    })
})