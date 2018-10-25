import axios from "axios";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";

import addAction from "./addAction";

const mock = new MockAdapter(axios);
const mockStore = configureMockStore();
const store = mockStore({ result: 0 });

describe("Test add action creator", () => {
    afterEach(() => {
        mock.reset();
        mock.restore();
    })

    it("Should test add Async action creater", async () => {
        mock.onPost("/add").reply(200, { result: 1 });

        await addAction(0, 1)(store.dispatch);

        // console.log(store.getActions());
        expect(store.getActions()).toEqual([{ "type": "ADD", payload: 1 }]);
    })
})

